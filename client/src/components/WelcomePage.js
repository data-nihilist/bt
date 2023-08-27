import React, { useState, useEffect } from "react"
import VenueList from "./VenueList"
import VenueForm from "./VenueForm"
import Playlist from "./spotify/Playlist.js"
import ArtistForm from "./ArtistForm.js"


const WelcomePage = (props) => {
    const currentUser = props.user

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

    let venueForm;
    if (currentUser) {
        venueForm = <VenueForm
        />
    }
    let artistForm;
    if (currentUser) {
        artistForm = <ArtistForm
            currentUser={currentUser}
        />
    }
    const welcomePagePlaylistHeader = (
        <h1>
            All the following tracks have been contributed by GTTG's hosts
        </h1>
    )
    return (
        <div className="bg-black text-white">
            <div className="container playlistHeader">
                <VenueList
                    venues={venues}
                    setVenues={setVenues}
                />
                <h3>
                    {venueForm}
                    {artistForm}
                </h3>
            </div>
                <div className="card-title text-info playlistHeader">
                    {welcomePagePlaylistHeader}
                </div>
                    <div>
            <Playlist tracks={tracks} />
                    </div>
        </div>
    )
}
export default WelcomePage