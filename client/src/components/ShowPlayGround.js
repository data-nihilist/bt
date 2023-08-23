import React, { useState, useEffect } from "react"
import Spotify from "./Spotify.js"
import Playlist from "./spotify/Playlist.js"

const ShowPlayGround = (props) => {
    const [shows, setShows] = useState([])
    const [tracks, setTracks] = useState([])

    const getShows = async () => {
        try {
            const response = await fetch("/api/v1/shows")
            if (!response.ok) {
                throw (new Error(`${response.status} (${response.statusText})`))
            }
            const body = await response.json()
            setShows(body.shows)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    const getTracks = async () => {
        try {
            const tracks = await fetch(`/api/v1/tracks`)
            const trackOptions = await tracks.json()
            setTracks(trackOptions.tracks)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getShows()
        getTracks()
    }, [])


    const showOptions = shows.map((show) => {
        return (
            <option key={show.id}>
                {show.title}
            </option>
        )
    })
    showOptions.unshift(<option></option>)

    const trackOptions = tracks.map((track) => {
        return (
            <option key={track.id}>
                {track.title.concat(` - ${track.artist}`)}
            </option>
        )
    })
    trackOptions.unshift(<option></option>)

    const [showData, setShowData] = useState("")
    const [trackData, setTrackData] = useState("")

    const showShowData = (event) => {
        event.preventDefault()
        setShowData(event.currentTarget.value)
    }

    const showTrackData = (event) => {
        event.preventDefault()
        const trackTitleData = event.currentTarget.value.split(" ")
        const trackTitle = (trackTitleData[0])
        setTrackData(trackTitle)
    }

    const trueData = {
        showTitle: showData,
        trackTitle: trackData
    }

    const setVibe = async () => {
        try {
            const response = await fetch(`/api/v1/vibes`, {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify(trueData)
            })
            if (!response.ok) {
                throw (new Error(`${response.status} (${response.statusText})`))
            }
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setVibe()
    }

    const showsToDisplay = shows.map(show => {
        return (
            <ul>
                <li
                    key={show.id}
                >
                    <h1>
                        {show.title}
                    </h1>
                    <h2>
                        {show.date}
                    </h2>
                    <h3>
                        {show.doors}
                    </h3>
                    <img src={show.image} />
                </li>
                <Playlist
                    tracks={show.tracks}
                />
            </ul>
        )
    })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <select onInput={showShowData} >
                    {showOptions}
                </select>
                <select onInput={showTrackData} >
                    {trackOptions}
                </select>
                <div className="button-group">
                    <input className="button" type="submit" value="Add Track To Show's Playlist" />
                </div>
            </form>
            {showsToDisplay}
        </div>
    )
}

export default ShowPlayGround