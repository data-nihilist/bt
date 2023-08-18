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

    const addShowToVenue = async () => {
        const showFormData = new FormData();
        showFormData.append("title", showRecord.title)
        showFormData.append("date", showRecord.date)
        showFormData.append("doors", showRecord.doors)
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
        clearForm()
    }
    //-----------------------------------------------------DOORS
    // const times = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    // const timeOptionsPM = times.map((time) => {
    //     return(
    //         <>
    //             <option value={`${time}AM`}>{`${time} PM`}</option>
    //         </>
    //     )
    // })
    // const timeOptionsAM = times.map((time) => {
    //     return(
    //         <>
    //             <option value={`${time}PM`}>{`${time} AM`}</option>
    //         </>
    //     )
    // })

    //----------------------------------------------------------

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
                <label htmlFor="doors">DOORS @
                    <input
                        id="doors"
                        type="text"
                        name="doors"
                        value={showRecord.doors}
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