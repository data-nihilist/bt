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

    let venueForm = "Sign In to create a venue and/or contribute to GTTG's available tracks :D"
    if (currentUser) {
        venueForm = <VenueForm
            currentUser={currentUser}
            setVenues={setVenues}
            venues={venues}
        />
    }
    let artistForm = "Sign In to create an Artist Profile B)"
    if (currentUser) {
        artistForm = <ArtistForm
            currentUser={currentUser}
        />
    }

    const titleHeader = "Get.To.The.Gig."

    return (
        <div className="bg-black">
            <h1 className="card bg-black text-white">
                {titleHeader}
            </h1>
            <div className="row gap-2 justify-flex-end">
                <div className="card container">
                    <div className="card bg-black text-white">
                        <div className="card card-body">
                            <VenueList
                                venues={venues}
                            />
                        </div>
                        <div className="card">
                            {venueForm}
                            {artistForm}
                        </div>
                    </div>
                </div>
                <Playlist tracks={tracks} />
            </div>
        </div>
    )
}
export default WelcomePage