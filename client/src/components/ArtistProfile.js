import React, { useState, useEffect } from "react"

const ArtistProfile = (props) => {
    const artistId = props.match.params.id
    const [artist, setArtist] = useState({
        name: "",
        genre: "",
        originCity: "",
        description: "",
        touring: "",
        userId: "",
        image: ""
    })



    const getArtist = async () => {
        try {
            const artist = await fetch(`/api/v1/artists/${artistId}`)
            if (!artist.ok) {
                throw (new Error(`${artist.status} (${artist.statusText})`))
            }
            const trveArtist = await artist.json()
            setArtist(trveArtist.artist)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getArtist()
    }, [])

    return (
        <div className="bg-black text-white">
            <div className="container">
                <div className="card">
                    <h1 className="card-title responsive-test">
                        {artist.name}
                    </h1>
                    <h2>
                        {artist.genre}
                    </h2>
                    <h3 className="text-info">
                        {artist.originCity}
                    </h3>
                    <h4>
                        {artist.description}
                    </h4>
                    <img src={artist.image} />
                </div>
            </div>
        </div>
    )
}

export default ArtistProfile