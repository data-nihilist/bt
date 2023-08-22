import React from 'react'

const TrackSearchResult = ({ track }) => {
    const source = "https://open.spotify.com/track/"
    const detail = track.uri.split(":")
    const link = source.concat(detail[2])

    const saveTrack = async () => {
        try{
            const response = await fetch(`/api/v1/tracks`, {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json",
                }),
                body: JSON.stringify(track)
            })
            if(!response.ok) {
                throw(new Error(`${response.status} (${response.statusText})`))
            } else {
                const responseBody = await response.json()
            }
        }catch(error){
            console.error(`Error in fetch: ${error.message}`)
        }
    }

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
                    <div className="button-group">
                        <input className="button" type="button" onClick={saveTrack} value="Add Track To Playlist" />
                    </div>
            </div>
        </div>
    )
}

export default TrackSearchResult