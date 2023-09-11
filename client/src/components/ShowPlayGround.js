import React, { useState, useEffect } from "react"
import Playlist from "./spotify/Playlist.js"
import { Link } from "react-router-dom"
import Spotify from "./Spotify.js"

const ShowPlayGround = (props) => {
    const [shows, setShows] = useState([])
    const [tracks, setTracks] = useState([])
    const [artists, setArtists] = useState([])

    const [artistData, setArtistData] = useState("")
    const [showData, setShowData] = useState("")
    const [trackData, setTrackData] = useState("")

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

    const getArtists = async () => {
        try {
            const artists = await fetch('/api/v1/artists')
            const artistOptions = await artists.json()
            setArtists(artistOptions.artists)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getShows()
        getTracks()
        getArtists()
    }, [])

    const showOptions = shows.map((show) => {
        return (
            <option key={show.id}>
                {show.title}
            </option>
        )
    })
    showOptions.unshift(<option></option>)

    const showShowData = (event) => {
        event.preventDefault()
        setShowData(event.currentTarget.value)
    }

    const trackOptions = tracks.map((track) => {
        return (
            <option key={track.uri}>
                {track.title}
            </option>
        )
    })
    trackOptions.unshift(<option></option>)

    const showTrackData = (event) => {
        event.preventDefault()
        setTrackData(event.currentTarget.value)
    }

    const trueData = {
        showTitle: showData,
        trackTitle: trackData
    }

    const artistOptions = artists.map((artist) => {
        return (
            <option key={artist.id}>
                {artist.name}
            </option>
        )
    })
    artistOptions.unshift(<option></option>)

    const showArtistData = (event) => {
        event.preventDefault()
        setArtistData(event.currentTarget.value)
    }

    const nightFlow = {
        showTitle: showData,
        artistName: artistData
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

    const setLineup = async () => {
        try {
            const response = await fetch(`/api/v1/lineups`, {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify(nightFlow)
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

    const handleLineup = (event) => {
        event.preventDefault()
        setLineup()
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
                    <div>
                        <Link to={`/venues/${show.venue.name}/${show.id}`} >
                            <img src={show.image} />
                        </Link>
                    <div className="placeSongTiles">
                        <Playlist
                            tracks={show.tracks}
                            />
                    </div>
                    </div>
                            </li>
                </ul>
            </div>
        )
    })

    return (
        <div className="responsive-test">
            <div className="container">

        <div className="bg-black text-white">
            <form onSubmit={handleSubmit} className="card">
                Show Select <select onInput={showShowData} className="card bg-black text-white mb-1" >
                    {showOptions}
                </select>
                Track Select <select onInput={showTrackData} className="card bg-black text-white mb-1" >
                    {trackOptions}
                </select>
                <div className="button-group">
                    <input className="btn-complement-yellow" type="submit" value="Add To Show's Playlist" />
                </div>
            </form>
            <div className="bg-black text-white">
                <form onSubmit={handleLineup} className="card">
                    Show Select <select onInput={showShowData} className="card bg-black text-white mb-1" >
                        {showOptions}
                    </select>
                    Artist Select <select onInput={showArtistData} className="card bg-black text-white mb-1" >
                        {artistOptions}
                    </select>
                    <div className="button-group">
                        <input className="btn-complement-yellow" type="submit" value="Add Artist To Show's Lineup" />
                    </div>
                </form>
            </div>
            {shows
                        && shows.length >= 1
                            && <div><Spotify /></div>}
            <div className="card container">
            <h3 className="card-title responsive-test">Your Shows</h3>
                    {showsToDisplay}
            </div>
            </div>
        </div>
        </div>
    )
}

export default ShowPlayGround