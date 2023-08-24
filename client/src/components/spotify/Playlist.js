import React from "react"
import TrackTile from "./TrackTile.js"

const Playlist = ({ tracks }) => {
    
    const savedTracks = tracks.map((track) => {
        return (
            <TrackTile
            key={track.id}
            track={track}
            />
        )
    })
    return(
        <>
            {savedTracks}
        </>
    )
}

export default Playlist