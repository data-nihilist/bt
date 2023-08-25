import React from "react"

const ArtistTile = ({ id, name, genre, originCity }) => {

    return (
        <div key={id}>
            <h2 className="responsive-test">{name}</h2>
            <h4>{genre}</h4>
            <h5 className="text-info">{originCity}</h5>
        </div>
    )
}

export default ArtistTile