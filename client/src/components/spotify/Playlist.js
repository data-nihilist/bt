import React from "react"
import TrackTile from "./TrackTile.js"

const Playlist = ({ tracks }) => {

    const savedTracks = tracks.map((track) => {
        return (
                <TrackTile
                    track={track}
                    key={track.id}
                />
        )
    })
    return (
        <div>
            {savedTracks}
        </div>
    )
}

export default Playlist