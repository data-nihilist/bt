import React from "react"

const TrackTile = ({ track }) => {
    const source = "https://open.spotify.com/track/"
    const detail = track.uri.split(":")
    const link = source.concat(detail[2])

    return (
        <>
            <a href={`${link}`} target="_blank" className="pl-1" key={track.id}>
                <img key={track.id} src={track.albumUrl} />
            </a>
        </>

    )
}

export default TrackTile