import React, { useState, useEffect } from "react"
import TrackTile from "./TrackTile.js"

const Playlist = (props) => {
    const [tracks, setTracks] = useState([])

    const getTracks = async () => {
        try{
            const response = await fetch("/api/v1/tracks")
            if(!response.ok){
                throw(new Error(`${response.status} (${response.statusText})`))
            }
            const body = await response.json()
            setTracks(body.tracks)
        }catch(error){
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getTracks()
    }, [])

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