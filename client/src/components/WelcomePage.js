import React, { useState, useEffect } from "react"
import VenueList from "./VenueList"
import VenueForm from "./VenueForm"


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
            venues={venues}
            setVenues={setVenues}
        />
    }

    return (
        <div className="row gap-2 justify-flex-end">
            <div className="card container">
                <div className="card bg-black text-white">
                    <h1 className="bg-black text-white card-title">
                        "yo yo yo from the welcome page"
                    </h1>
                    <div className="card-body">
                        {message}
                    </div>
                </div>
            </div>
            </div>
    )
}

export default WelcomePage