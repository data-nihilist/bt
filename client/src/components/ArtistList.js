import React from "react"
import ArtistTile from "./ArtistTile.js"
import { Link } from "react-router-dom"

const ArtistList = ({ artists }) => {

    const listOfArtists = artists.map(artist => {
        return (
            <>
                <Link to={`/artists/${artist.id}`}>
                    <ArtistTile
                        id={artist.id}
                        name={artist.name}
                        genre={artist.genre}
                        originCity={artist.originCity}
                    />
                </Link>
            </>
        )
    })

    return (
        <div>
            {listOfArtists}
        </div>
    )
}

export default ArtistList