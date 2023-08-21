import React from 'react'

const TrackSearchResult = ({ track }) => {
    const source = "https://open.spotify.com/track/"
    const detail = track.uri.split(":")
    const link = source.concat(detail[2])
    return (
        <div>
            <div
                className="callout"
                style={{ cursor: "pointer" }}
            >
                <a href={`${link}`} target="_blank">
                    <img
                        src={track.albumUrl}
                        style={{ height: '64px', width: '64px' }}
                    />
                </a>
                    <h2>
                        {track.title}
                    </h2>
                    <p className="text-grey">
                        {track.artist}
                    </p>
            </div>
        </div>
    )
}

export default TrackSearchResult