import React, { useState } from "react"

const ArtistForm = ({ currentUser }) => {
    const [artistRecord, setArtistRecord] = useState({
        name: "",
        genre: "",
        originCity: "",
        description: "",
        userId: currentUser.id
    })

    const saveArtist = async () => {
        try {
            const response = await fetch("/api/v1/artists", {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify(artistRecord)
            })
            if (!response.ok) {
                throw (new Error(`${response.status} (${response.statusText})`))
            }
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

    const handleSubmit = (event) => {
        event.preventDefault()
        saveArtist()
    }


    return (
        <div className="card bg-black text-white">
            <h1 className="card-title">Create An Artist Profile</h1>
            <form className="card" onSubmit={handleSubmit} >
                <label className="card-body" htmlFor="name"> Alias
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={artistRecord.name}
                        onChange={handleInputChange}
                        className="card bg-black text-white mb-2"
                    />
                </label >
                <label className="card-body" htmlFor="genre"> Genre
                    <input
                        id="genre"
                        type="text"
                        name="genre"
                        value={artistRecord.genre}
                        onChange={handleInputChange}
                        className="card bg-black text-white mb-2"
                    />
                </label>
                <label className="card-body" htmlFor="originCity"> City of Origin
                    <input
                        id="originCity"
                        type="text"
                        name="originCity"
                        value={artistRecord.originCity}
                        onChange={handleInputChange}
                        className="card bg-black text-white mb-2"
                    />
                </label>
                <label className="card-body" htmlFor="description"> Description
                    <input
                        id="description"
                        type="text-area"
                        name="description"
                        value={artistRecord.description}
                        onChange={handleInputChange}
                        className="card bg-black text-white mb-2"
                    />
                </label>
                <div className="button-group">
                    <input className="btn-complement-yellow mt-1" type="submit" value="Save Artist Profile" />
                    <input className="btn-complement-red" type="button" onClick={clearForm} value="Reset Fields" />
                </div>
            </form>
        </div>
    )
}

export default ArtistForm