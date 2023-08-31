import React, { useState, useEffect } from "react"
import VenueList from "./VenueList"
import Playlist from "./spotify/Playlist.js"


const WelcomePage = (props) => {

    const [venues, setVenues] = useState([])
    const [tracks, setTracks] = useState([])

    const getTracks = async () => {
        try {
            const response = await fetch("/api/v1/tracks")
            if (!response.ok) {
                throw (new Error(`${response.status} (${response.statusText})`))
            }
            const responseBody = await response.json()
            setTracks(responseBody.tracks)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    const getVenues = async () => {
        try {
            const response = await fetch("/api/v1/venues")
            if (!response.ok) {
                throw (new Error(`${response.status} (${response.statusText})`))
            }
            const responseBody = await response.json()
            setVenues(responseBody.venues)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getVenues()
        getTracks()
    }, [])

    const welcomePagePlaylistHeader = (
            <h1>
                GTTG's host-added spotify tracks
            </h1>
    )
    return (
        <div className="bg-black text-white">
            <div className="container">
                <VenueList
                    venues={venues}
                />
            <div className="card card-title text-info playlistHeader">
                {welcomePagePlaylistHeader}
            </div>
            <div className="card communityPlaylist">
                <Playlist tracks={tracks} />
            </div>
            </div>
        </div>
    )
}
export default WelcomePage