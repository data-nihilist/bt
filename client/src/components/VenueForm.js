import React, { useState } from "react"
import translateServerErrors from "../services/translateServerErrors";
import Dropzone from "react-dropzone"
import { Redirect } from "react-router-dom"
import FormError from "./layout/FormError";
import ShowPlayGround from "./ShowPlayGround.js"


const VenueForm = (props) => {
    const [venueRecord, setVenueRecord] = useState({
        name: "",
        location: "",
        image: ""
    }
    )
    const [isPending, setIsPending] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const [errors, setErrors] = useState({})

    const addVenue = async () => {
        const venueFormData = new FormData();
        venueFormData.append("name", venueRecord.name)
        venueFormData.append("location", venueRecord.location)
        venueFormData.append("image", venueRecord.image)
        try {
            const newVenue = await fetch("/api/v1/venues", {
                method: "POST",
                headers: {
                    Accept: "image/jpeg",
                },
                body: venueFormData
            });
            if (!newVenue.ok) {
                if (newVenue.status === 422) {
                    const body = await newVenue.json()
                    const newErrors = translateServerErrors(body.error);
                    return setErrors(newErrors)
                } else {
                    throw (new Error(`${newVenue.status} (${newVenue.statusText})`))
                }
            }
            setIsPending(true)
            setRedirect(true)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    const handleInputChange = (event) => {
        setVenueRecord({
            ...venueRecord,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const clearForm = (event) => {
        setVenueRecord({
            name: "",
            location: "",
            image: ""
        })
    }

    const validateInput = (payload) => {
        setErrors({});
        const { name, location, image } = payload;
        let newErrors = {};
        if (name.trim() === "") {
            newErrors = {
                ...newErrors,
                name: "*Required*"
            };
        }
        if (location.trim() === "") {
            newErrors = {
                ...newErrors,
                location: "*Required*",
            };
        }
        if (!image) {
            newErrors = {
                ...newErrors,
                image: "*Required*"
            }
        }
        setErrors(newErrors);
    }

    const handleVenueImageUpload = (acceptedVenueImage) => {
        setVenueRecord({
            ...venueRecord,
            image: acceptedVenueImage[0],
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        validateInput(venueRecord)
        addVenue(venueRecord)
    }

    if (redirect) {
        return <Redirect push to={`/venues/${venueRecord.name}`} />
    }

    return (
        <div className="bg-black text-white">
            <form className="card" onSubmit={handleSubmit}>
                <h1 className="card-title">Add Your Venue</h1>
                <label className="card-body" htmlFor="name">
                    Venue Name
                    <div className="card-body text-info">
                        <FormError error={errors.name} />
                    </div>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={venueRecord.name}
                        onChange={handleInputChange}
                        className="card bg-black text-white mb-1"
                    />
                </label>
                <div className="mb-2">
                    <label className="card-body" htmlFor="location">
                        Venue Location
                        <div className="card-body text-info">
                            <FormError error={errors.location} />
                        </div>
                        <p className="responsive-test">Be as specific or vague as you'd like!</p>
                        <input
                            id="location"
                            type="text"
                            name="location"
                            value={venueRecord.location}
                            onChange={handleInputChange}
                            className="card bg-black text-white mb-1"
                        />
                    </label>
                    <Dropzone onDrop={handleVenueImageUpload} >
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p className="btn-complement-yellow mt-1 formButtons">Add Venue Image</p>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                    <div className="card-body text-info">
                        <FormError error={errors.image} />
                    </div>
                </div>
                <div className="button-group formButtons">
                    {!isPending && <input className="btn-complement-purple mr-2 mb-1" type="submit" value="Create Venue" />}
                    {isPending && <button className="btn-complement-blue mr-2 mb-1" disabled>Adding venue...</button>}
                    <input className="btn-complement-red ml-2 mb-1" type="button" onClick={clearForm} value="Reset Fields" />
                </div>
            </form>
            <ShowPlayGround />
        </div>
    )
}

export default VenueForm