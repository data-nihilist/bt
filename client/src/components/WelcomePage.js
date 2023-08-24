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
            console.table(responseBody.venues[0].shows)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getVenues()
    }, [])

    let venueForm = "Sign In to create a venue and/or contribute to GTTG's available tracks :D"
    if (currentUser) {
        venueForm = <VenueForm
            currentUser={currentUser}
            setVenues={setVenues}
            venues={venues}
        />
    }

    let spotify;
    if (currentUser) {
        spotify = <Spotify />
    }

    return (
        <div className="bg-black">
            <div className="row gap-2 justify-flex-end">
                <div className="card container">
                    <div className="card bg-black text-white">
                        <h1 className="bg-black text-white card-title">
                            "Get.To.The.Gig"
                        </h1>
                        <div className="card card-body">
                            <VenueList
                                venues={venues}
                            />
                        </div>
                        <div className="callout">
                            {spotify}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WelcomePage