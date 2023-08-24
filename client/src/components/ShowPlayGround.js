import React, { useState, useEffect } from "react"
import Playlist from "./spotify/Playlist.js"
import { Link } from "react-router-dom"
import Spotify from "./Spotify.js"

const ShowPlayGround = (props) => {
    const [shows, setShows] = useState([])
    const [tracks, setTracks] = useState([])
    console.log(tracks)
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
            <option key={track.uri}>
                {track.title}
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
    console.log(showData)
    console.log(trackData)
    const showTrackData = (event) => {
        event.preventDefault()
        setTrackData(event.currentTarget.value)
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
            console.log(trueData)
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
            <div className="bg-black text-white card container">

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
                        <Link to={`/venues/${show.hostId}/${show.id}`} >
                            <img src={show.image} />
                        </Link>
                    </li>
                    <div className="card container">
                        <Playlist
                            tracks={show.tracks}
                        />
                    </div>
                </ul>
            </div>
        )
    })

    return (
        <div className="bg-black text-white">
            <form onSubmit={handleSubmit}>
                Show Select <select onInput={showShowData} className="card bg-black text-white" >
                    {showOptions}
                </select>
                Track Select <select onInput={showTrackData} className="card bg-black text-white" >
                    {trackOptions}
                </select>
                <div className="button-group">
                    <input className="btn-complement-yellow" type="submit" value="Add Track To Show's Playlist" />
                </div>
            <Spotify />
            </form>
            {showsToDisplay}
        </div>
    )
}

export default ShowPlayGround