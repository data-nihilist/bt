import React, { useState, useEffect } from "react"
import VenueList from "./VenueList"
import VenueForm from "./VenueForm"


const WelcomePage = (props) => {
    const signedInUser = props.user

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
    if (signedInUser) {
        message = <VenueForm
            signedInUser={signedInUser}
            venues={venues}
            setVenues={setVenues}
        />
    }

    return (
        <div>
            <h1>
                Get.To.The.Gig.
            </h1>
            <div>
                <VenueList
                    signedInUser={signedInUser}
                    venues={venues}
                    setVenues={setVenues}
                />
            </div>
            <div>
                {message}
            </div>
        </div>
    )
}

export default WelcomePage