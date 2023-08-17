import React, { useState } from "react"
import translateServerErrors from "../services/translateServerErrors";
import Dropzone from "react-dropzone"

const VenueForm = (props) => {
    const [venueRecord, setVenueRecord] = useState({
        hostId: props.currentUser.id,
        name: "",
        location: "",
        image: ""
    })

    const [errors, setErrors] = useState({})
    const [redirect, shouldRedirect] = useState(false)

    const addVenue = async () => {
        const venueFormData = new FormData();
        venueFormData.append("hostId", venueRecord.hostId)
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
            shouldRedirect(true)
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

    const handleVenueImageUpload = (acceptedVenueImage) => {
        setVenueRecord({
            ...venueRecord,
            image: acceptedVenueImage[0],
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addVenue()
        clearForm()
    }

    if (redirect) {
        location.href = `/venues/${props.venues.length + 1}`;
    }

    return (
        <div className="bg-black">
            <div className="card bg-black text-white">
                <h1 className="card-title">Add Your Venue</h1>
                <form className="card" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label className="card-body" htmlFor="name">
                            Venue Name
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={venueRecord.name}
                                onChange={handleInputChange}
                                className="card bg-black text-white"
                            />
                        </label>
                    </div>
                    <div className="mb-2">
                        <label className="card-body" htmlFor="location">
                            Venue Location
                            <input
                                id="location"
                                type="text"
                                name="location"
                                value={venueRecord.location}
                                onChange={handleInputChange}
                                className="card bg-black text-white"
                            />
                        </label>
                        <Dropzone onDrop={handleVenueImageUpload}>
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p className="button">Add Picture (optional)</p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                    <div className="button-group">
                        <input className="button" type="submit" value="Create Venue" />
                        <input className="button" type="button" onClick={clearForm} value="Reset" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default VenueForm