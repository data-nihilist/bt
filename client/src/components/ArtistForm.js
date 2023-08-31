import React, { useState, useEffect } from "react"
import translateServerErrors from "../services/translateServerErrors";
import Dropzone from "react-dropzone"
import FormError from "./layout/FormError"
import { Redirect } from "react-router-dom"
import ActiveArtists from "./ActiveArtists.js"

const ArtistForm = (props) => {
    const [artistRecord, setArtistRecord] = useState({
        name: "",
        genre: "",
        originCity: "",
        description: "",
        image: ""
    })
    const [existingArtists, setExistingArtists] = useState([])
    const [redirect, setRedirect] = useState(false)
    const [errors, setErrors] = useState({})

    const getArtists = async () => {
        try{
            const response = await fetch("/api/v1/artists")
            if(!response.ok) {
                throw (new Error(`${response.status} (${response.statusText})`))
            }
            const body = await response.json()
            setExistingArtists(body.artists)
        }catch(error){
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getArtists()
    }, [])

    const artistNames = []
    existingArtists.forEach(artist => {
        artistNames.push(artist.name)
    })
    
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

    const handleArtistImageUpload = (acceptedArtistImage) => {
        setArtistRecord({
            ...artistRecord,
            image: acceptedArtistImage[0],
        })
    }

    const clearForm = () => {
        setArtistRecord({
            name: "",
            genre: "",
            originCity: "",
            description: "",
            image: ""
        })
    }
    
    const validateInput = (payload) => {
        setErrors({});
        const { name, genre, originCity, description, image } = payload
        let newErrors = {};
        if (name.trim() === "") {
            newErrors = {
                ...newErrors,
                name: "Every artist needs a name."
            };
        }
        artistNames.forEach(artistName => {
            if(name === artistName) {
                return newErrors = {
                    ...newErrors,
                    name: "That name has been taken."
                }
            }
        })
        if (genre.trim() === "") {
            newErrors = {
                ...newErrors,
                genre: "A genre is required. Be as niche/specific as you'd like."
            };
        }
        if (originCity.trim() === "") {
            newErrors = {
                ...newErrors,
                originCity: "Please indicate the artist's city of origin."
            };
        }
        if (description.trim() === "") {
            newErrors = {
                ...newErrors,
                description: "Please describe the artist's work."
            };
        }
        if (description.length + 1 > 255) {
            newErrors = {
                ...newErrors,
                description: "Artist descriptions must be 255 characters or less."
            }
        }
        if (!image) {
            newErrors = {
                ...newErrors,
                image: "Please provide an image of the artist."
            };
        }

        setErrors(newErrors);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        validateInput(artistRecord)
        saveArtist()
    }
    
    if (redirect) {
        return <Redirect push to="/artists" />
    }

    return (
        <div className="bg-black text-white">
            <form className="card" onSubmit={handleSubmit} >
                <h1 className="card-title">Create An Artist Profile</h1>
                <label className="card-body" htmlFor="name"> Name
                    <div className="card-body text-info">
                        <FormError error={errors.name} />
                    </div>
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
                    <div className="card-body text-info">
                        <FormError error={errors.genre} />
                    </div>
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
                    <div className="card-body text-info">
                        <FormError error={errors.originCity} />
                    </div>
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
                    <div className="card-body text-info">
                        <FormError error={errors.description} />
                    </div>
                        <textarea
                            id="description"
                            type="text"
                            name="description"
                            value={artistRecord.description}
                            onChange={handleInputChange}
                            className="card bg-black text-white mb-1"
                        />
                    </label>
                    <Dropzone onDrop={handleArtistImageUpload} >
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
                    <input className="btn-complement-purple mr-2 mb-1" type="submit" value="Save Artist Profile" />
                    <input className="btn-complement-red ml-2 mb-1" type="button" onClick={clearForm} value="Reset Fields" />
                </div>
            </form>
            <ActiveArtists />
        </div>
    )
}

export default ArtistForm