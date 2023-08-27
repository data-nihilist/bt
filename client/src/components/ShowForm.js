import React, { useState } from "react"
import translateServerErrors from "../services/translateServerErrors"
import Dropzone from "react-dropzone"

const ShowForm = (props) => {
    const [showRecord, setShowRecord] = useState({
        title: "",
        date: "",
        doors: "",
        image: ""
    })

    const shows = props.shows
    const venue = props.venue

    const [errors, setErrors] = useState({})
    const [isPending, setIsPending] = useState(false)


    const addShowToVenue = async () => {
        const showFormData = new FormData();
        showFormData.append("title", showRecord.title)
        showFormData.append("date", showRecord.date)
        showFormData.append("image", showRecord.image)
        showFormData.append("doors", showRecord.doors)

        try {
            const newShow = await fetch(`/api/v1/venues/${venue.id}/shows`, {
                method: "POST",
                headers: {
                    Accept: "image/jpeg",
                },
                body: showFormData
            })
            if (!newShow.ok) {
                if (newShow.status === 422) {
                    const body = await newShow.json()
                    const newErrors = translateServerErrors(body.error);
                    return setErrors(newErrors)
                } else {
                    throw (new Error(`${newShow.status} (${newShow.statusText})`))
                }
            }
            setIsPending(true)

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
            doors: "",
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
        <div className="bg-black text-white">
            <form className="card" onSubmit={handleSubmit}>
                <h1 className="card-title">Add Shows To Your Venue!</h1>
                <label className="card-body" htmlFor="title">
                    Show title
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={showRecord.title}
                        onChange={handleInputChange}
                        className="card bg-black text-white mb-2"
                    />
                </label>
                    <label className="card-body" htmlFor="date">
                        Show date
                        <input
                            id="date"
                            type="text"
                            name="date"
                            value={showRecord.date}
                            onChange={handleInputChange}
                            className="card bg-black text-white mb-2"
                        />
                    </label>
                    <div className="mb-2">
                        <label className="card-body" htmlFor="doors">
                            DOORS @
                            <input
                                id="doors"
                                type="text"
                                name="doors"
                                value={showRecord.doors}
                                onChange={handleInputChange}
                                className="card bg-black text-white"
                            />
                        </label>
                        <Dropzone onDrop={handleShowImageUpload}>
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p className="btn-complement-yellow mt-1 formButtons">Add Picture</p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                    <div className="button-group formButtons">
                        {!isPending && <input className="btn-complement-purple mr-2 mb-1" type="submit" value="Add Show" />}
                        {isPending && <button className="btn-complement-blue mr-2 mb-1" disabled>Adding show...</button>}
                        <input className="btn-complement-red ml-2 mb-1" type="button" onClick={clearForm} value="Reset Fields" />
                    </div>
            </form>
        </div>
    )
}

export default ShowForm