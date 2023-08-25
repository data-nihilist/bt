import React, { useState } from "react"
import translateServerErrors from "../services/translateServerErrors";
import Dropzone from "react-dropzone"

const ArtistForm = ({ currentUser }) => {
    const [artistRecord, setArtistRecord] = useState({
        name: "",
        genre: "",
        originCity: "",
        description: "",
        userId: currentUser.id,
        image: ""
    })

    const [errors, setErrors] = useState({})
    const [redirect, setRedirect] = useState(false)

    const saveArtist = async () => {
        const artistFormData = new FormData();
        artistFormData.append("name", artistRecord.name)
        artistFormData.append("genre", artistRecord.genre)
        artistFormData.append("originCity", artistRecord.originCity)
        artistFormData.append("description", artistRecord.description)
        artistFormData.append("image", artistRecord.image)

        try {
            const response = await fetch("/api/v1/artists", {
                method: "POST",
                headers: {
                    Accept: "image/jpeg",
                },
                body: artistFormData
            })
            console.log(response)
            if (!response.ok) {
                if (response.status === 422) {
                    const body = await response.json()
                    const newErrors = translateServerErrors(body.error);
                    return setErrors(newErrors)
                } else {
                    throw (new Error(`${response.status} (${response.statusText})`))
                }
            }
            setRedirect(true)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    const handleInputChange = (event) => {
        event.preventDefault()
        setArtistRecord({
            ...artistRecord,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const clearForm = (event) => {
        setArtistRecord({
            name: "",
            genre: "",
            originCity: "",
            description: "",
        })
    }

    const handleArtistImageUpload = (acceptedArtistImage) => {
        setArtistRecord({
            ...artistRecord,
            image: acceptedArtistImage[0],
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        saveArtist()
    }

    if (redirect) {
        location.href = `/artists`;
    }

    return (
        <div className="bg-black text-white">
            <form className="card" onSubmit={handleSubmit} >
            <h1 className="card-title">Create An Artist Profile</h1>
                <label className="card-body" htmlFor="name"> Alias
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={artistRecord.name}
                        onChange={handleInputChange}
                        className="card bg-black text-white mb-1"
                    />
                </label >
                <label className="card-body" htmlFor="genre"> Genre
                    <input
                        id="genre"
                        type="text"
                        name="genre"
                        value={artistRecord.genre}
                        onChange={handleInputChange}
                        className="card bg-black text-white mb-1"
                    />
                </label>
                <label className="card-body" htmlFor="originCity"> City of Origin
                    <input
                        id="originCity"
                        type="text"
                        name="originCity"
                        value={artistRecord.originCity}
                        onChange={handleInputChange}
                        className="card bg-black text-white mb-1"
                    />
                </label>
                <div className="mb-2">
                <label className="card-body" htmlFor="description"> Description
                    <input
                        id="description"
                        type="text-area"
                        name="description"
                        value={artistRecord.description}
                        onChange={handleInputChange}
                        className="card bg-black text-white mb-1"
                    />
                </label>
                <Dropzone onDrop={handleArtistImageUpload} >
                    {({ getRootProps, getInputProps }) => (
                        <section className="">
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p className="btn-complement-yellow mt-1">Add Picture</p>
                            </div>
                        </section>
                    )}
                </Dropzone>
                </div>
                <div className="button-group">
                    <input className="btn-complement-purple mr-2 mb-1" type="submit" value="Save Artist Profile" />
                    <input className="btn-complement-red ml-2 mb-1" type="button" onClick={clearForm} value="Reset Fields" />
                </div>
            </form>
        </div>
    )
}

export default ArtistForm