import React from "react"
import TrackTile from "./TrackTile.js"

const Playlist = ({ tracks }) => {

    const savedTracks = tracks.map((track) => {
        return (
            <div
            key={track.id}
            >
                <TrackTile
                    track={track}
                    key={track.id}
                />
            </div>
        )
    })
    return (
        <div className="card communityPlaylist">
            {savedTracks}
        </div>
    )
}

export default Playlist