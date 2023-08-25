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
            currentUser={currentUser}
            setVenues={setVenues}
            venues={venues}
        />
    }
    let artistForm;
    if (currentUser) {
        artistForm = <ArtistForm
            currentUser={currentUser}
        />
    }

    const titleHeader = "Get.To.The.Gig."

    return (
        <div className="bg-black">
            <div className="container bg-black text-white">
                <h1 className="card-title">
                    {titleHeader}
                </h1>
                <VenueList
                    venues={venues}
                />
                <Playlist tracks={tracks} />
                <h3>
                    {venueForm}
                    {artistForm}
                </h3>
            </div>
        </div>
    )
}
export default WelcomePage