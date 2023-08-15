import React, { useState } from "react"
import translateServerErrors from "../services/translateServerErrors";

const VenueForm = (props) => {

    const [venueRecord, setVenueRecord] = useState({
        hostId: props.signedInUser.id,
        name: "",
        location: "",
    })

    const venues = props.venues

    const [errors, setErrors] = useState({})

    const addVenue = async (formData) => {
        try {
            const newVenue = await fetch("/api/v1/venues", {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json",
                }),
                body: JSON.stringify(formData)
            })
            if (!newVenue.ok) {
                if (newVenue.status === 422) {
                    const body = await newVenue.json()
                    const newErrors = translateServerErrors(body.errors)
                    return setErrors(newErrors)
                } else {
                    throw (new Error(`${newVenue.status} (${newVenue.statusText})`))
                }
            } else {
                const body = await newVenue.json()
                const venueData = venues.concat(body.newVenue)
                setErrors({})
                props.setVenues(venueData)
            }
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
            location: ""
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addVenue(venueRecord)
        clearForm()
    }

<<<<<<< HEAD
    return (
        <div className="bg-black">
            <div className="card bg-black text-white">
                <h1 className="card-title">Add Your Venue</h1>
                <form className="card" onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label classname="card-body" htmlFor="name">
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
                    </div>

                    <div className="button-group">
                        <input className="special-button bg-green mb-1" type="submit" value="Create Venue" />
                    </div>
                </form>
            </div>
=======

    return (
        <div>
            <h1>Add Your Venue To The List!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Venue Name
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={venueRecord.name}
                        onChange={handleInputChange}
                    />
                </label>

                <label htmlFor="location"> Venue Location
                    <input
                        id="location"
                        type="text"
                        name="location"
                        value={venueRecord.location}
                        onChange={handleInputChange}
                    />
                </label>

                <div className="button-group">
                    <input className="button" type="submit" value="Create Venue" />
                </div>
            </form>
>>>>>>> d3442e3679365f68601c7e64206467366c8f5356
        </div>
    )
}

export default VenueForm