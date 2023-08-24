import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ActiveArtists = (props) => {

    const [artists, setArtists] = useState([])

    const getArtists = async () => {
        try {
            const artists = await fetch(`/api/v1/artists`)
            if (!artists.ok) {
                throw (new Error(`${artists.status} (${artists.statusText})`))
            }
            const allArtists = await artists.json()
            console.log(allArtists.artists)
            setArtists(allArtists.artists)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getArtists()
    }, [])

    const artistsList = artists.map(artist => {
        return (
            <div key={artist.id} className="card">
                <Link to={`/artists/${artist.id}`}>
                <h1>
                    {artist.name}
                </h1>
                </Link>
                <h2>
                    {artist.genre}
                </h2>
                <h3>
                    {artist.originCity}
                </h3>
                <h4>
                    {artist.description}
                </h4>
            </div>
        )

    })

    return (
        <div>
            {artistsList}
        </div>
    )
}

export default ActiveArtists