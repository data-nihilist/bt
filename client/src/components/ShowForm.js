import React, { useState } from "react"
import translateServerErrors from "../services/translateServerErrors"
import Dropzone from "react-dropzone"
import FormError from "./layout/FormError"
import Redirect from "react-router-dom"

const ShowForm = (props) => {
    const [showRecord, setShowRecord] = useState({
        title: "",
        date: "",
        doors: "",
        image: ""
    })

    const venue = props.venue

    const [isPending, setIsPending] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const [errors, setErrors] = useState({})



    const addShowToVenue = async () => {
        const showFormData = new FormData();
        showFormData.append("title", showRecord.title)
        showFormData.append("date", showRecord.date)
        showFormData.append("image", showRecord.image)
        showFormData.append("doors", showRecord.doors)

        try {
            const newShow = await fetch(`/api/v1/venues/${venue.name}/shows`, {
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
            setRedirect(true)
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

    const validateInput = (payload) => {
        setErrors({});
        const { title, date, doors, image } = payload;
        let newErrors = {};
        if (title.trim() === "") {
            newErrors = {
                ...newErrors,
                title: "All shows require a title."
            };
        }
        if (date.trim() === "") {
            newErrors = {
                ...newErrors,
                date: "All shows require a date.",
            };
        }
        if (doors.trim() === "") {
            newErrors = {
                ...newErrors,
                doors: "All shows require a start time.",
            }
        }
        // if (image.trim() === "") {
        //     newErrors = {
        //         ...newErrors,
        //         image: "All shows need an accompanying flyer.",
        //     }
        // }
        setErrors(newErrors);
    }

    const handleShowImageUpload = (acceptedShowImage) => {
        setShowRecord({
            ...showRecord,
            image: acceptedShowImage[0],
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        validateInput(showRecord)
        addShowToVenue()
    }

    if (redirect) {
        return <Redirect push to="/showplayground" />
    }

    return (
        <div className="bg-black text-white">
            <form className="card" onSubmit={handleSubmit}>
                <h1 className="card-title">Add Shows To Your Venue!</h1>
                <label className="card-body" htmlFor="title"> Show title
                    <div className="card-body text-info">
                        <FormError error={errors.title} />
                    </div>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={showRecord.title}
                        onChange={handleInputChange}
                        className="card bg-black text-white mb-2"
                    />
                </label>
                    <label className="card-body" htmlFor="date"> Show date
                        <div className="card-body text-info">
                        <FormError error={errors.date} />
                    </div>
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
                        <label className="card-body" htmlFor="doors"> DOORS @
                            <div className="card-body text-info">
                        <FormError error={errors.doors} />
                    </div>
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
                        <div className="card-body text-info">
                        <FormError error={errors.image} />
                    </div>
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