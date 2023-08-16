import React, { useState } from "react"
import translateServerErrors from "../services/translateServerErrors"

const ShowForm = (props) => {
    const [showRecord, setShowRecord] = useState({
        title: "",
        date: ""
    })

    const shows = props.shows
    const venue = props.venue

    const [errors, setErrors] = useState({})

    const addShowToVenue = async (formData) => {
        try{
            const newShow = await fetch(`/api/v1/venues/${venue.id}/shows`, {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json",
                }),
                body: JSON.stringify(formData)
            })
            if(!newShow.ok) {
                if (newShow.status === 422) {
                    const body = await newShow.json()
                    errors = translateServerErrors(body.errors)
                    return setErrors(errors)
                } else {
                    throw (new Error(`${newShow.status} (${newShow.statusText})`))
                }
            } else {
                const body = await newShow.json()
                const showData = shows.concat(body.newShow)
                setErrors({})
                props.setVenueShows(showData)
            }
        }catch(error){
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    const handleInputChange = (event) => {
        setShowRecord({
            ...showRecord,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const clearForm = (event) => {
        setShowRecord({
            title: "",
            date: ""
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addShowToVenue(showRecord)
        clearForm()
    }

    return (
        <div>
            <h1>Add Shows To Your Venue!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title"> Show title
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={showRecord.title}
                        onChange={handleInputChange}
                    />
                </label>

                <label htmlFor="date"> Show date
                    <input
                        id="date"
                        type="text"
                        name="date"
                        value={showRecord.date}
                        onChange={handleInputChange}
                    />
                </label>

                <div className="button-group">
                    <input className="button" type="submit" value="Add Show" />
                    <input className="button" type="button" onClick={clearForm} value="Reset" />
                </div>
            </form>
        </div>
    )
}

export default ShowForm