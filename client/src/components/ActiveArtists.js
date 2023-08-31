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
            <div key={artist.id} className="bg-black text-white">
                <div className="container">
                    <div className="card">
                        <Link to={`/artists/${artist.id}`}>
                            <h1 className="card-title responsive-test">
                                {artist.name}
                            </h1>
                        </Link>
                        <h2>
                            {artist.genre}
                        </h2>
                        <h3 className="text-info">
                            {artist.originCity}
                        </h3>
                        <h4>
                            {artist.description}
                        </h4>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="container tracks">
            {artistsList}
            <h1 className="card container">GTTG's Host Submitted Artist Profiles</h1>
        </div>
    )
}

export default ActiveArtists