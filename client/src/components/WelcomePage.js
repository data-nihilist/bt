import React, { useState, useEffect } from "react"
import VenueList from "./VenueList"
import VenueForm from "./VenueForm"
import Spotify from "./Spotify.js"


const WelcomePage = (props) => {
    const currentUser = props.user

    const [venues, setVenues] = useState([])

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
    }, [])

    let message = "Sign Up or Sign In to create a venue :D"
    if (currentUser) {
        message = <VenueForm
            currentUser={currentUser}
            setVenues={setVenues}
            venues={venues}
        />
    }

    return (
        <div>
            <h1>
                Get.To.The.Gig.
            </h1>
            <Spotify />
            <div>
                <VenueList
                    currentUser={currentUser}
                    venues={venues}
                    setVenues={setVenues}
                />
            </div>
            <h1>
                {message}
            </h1>
        </div>
    )
}

export default WelcomePage