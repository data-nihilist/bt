import React, { useState } from "react"
import translateServerErrors from "../services/translateServerErrors"
import Dropzone from "react-dropzone"

const ShowForm = (props) => {
    const [showRecord, setShowRecord] = useState({
        title: "",
        date: "",
        image: ""
    })

    const shows = props.shows
    const venue = props.venue

    const [errors, setErrors] = useState({})

    // const addShowToVenue = async (formData) => {
    //     try{
    //         const newShow = await fetch(`/api/v1/venues/${venue.id}/shows`, {
    //             method: "POST",
    //             headers: new Headers({
    //                 "Content-Type": "application/json",
    //             }),
    //             body: JSON.stringify(formData)
    //         })
    //         if(!newShow.ok) {
    //             if (newShow.status === 422) {
    //                 const body = await newShow.json()
    //                 errors = translateServerErrors(body.errors)
    //                 return setErrors(errors)
    //             } else {
    //                 throw (new Error(`${newShow.status} (${newShow.statusText})`))
    //             }
    //         } else {
    //             const body = await newShow.json()
    //             const showData = shows.concat(body.newShow)
    //             setErrors({})
    //             props.setVenueShows(showData)
    //         }
    //     }catch(error){
    //         console.error(`Error in fetch: ${error.message}`)
    //     }
    // }

    const addShowToVenue = async () => {
        const showFormData = new FormData();
        showFormData.append("title", showRecord.title)
        showFormData.append("date", showRecord.date)
        showFormData.append("image", showRecord.image)

        try {
            const newShow = await fetch(`/api/v1/venues/${venue.id}/shows`, {
                method: "POST",
                heades: {
                    Accept: "image/jpeg",
                },
                body: showFormData
            })
            console.log(newShow)
            if (!newShow.ok) {
                if (newShow.status === 422) {
                    const body = await newShow.json()
                    const newErrors = translateServerErrors(body.error);
                    return setErrors(newErrors)
                } else {
                    throw (new Error(`${newShow.status} (${newShow.statusText})`))
                }
            }
        } catch (error) {
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
            date: "",
            image: ""
        })
    }


    const handleShowImageUpload = (acceptedShowImage) => {
        setShowRecord({
            ...showRecord,
            image: acceptedShowImage[0],
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addShowToVenue()
        // clearForm()
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
                <Dropzone onDrop={handleShowImageUpload}>
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p className="button">Add Picture (optional)</p>
                            </div>
                        </section>
                    )}
                </Dropzone>
                <div className="button-group">
                    <input className="button" type="submit" value="Add Show" />
                    <input className="button" type="button" onClick={clearForm} value="Reset" />
                </div>
            </form>
        </div>
    )
}

export default ShowForm