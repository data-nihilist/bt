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

<<<<<<< HEAD
    let signedInStatus = <h2>You're not signed in!</h2>
    if (signedInUser) {
        signedInStatus = <VenueList
            venues={venues}
            signedInUser={signedInUser}
=======
    let message = "Sign Up or Sign In to create a venue :D"
    if (signedInUser) {
        message = <VenueForm
            signedInUser={signedInUser}
            venues={venues}
>>>>>>> d3442e3679365f68601c7e64206467366c8f5356
            setVenues={setVenues}
        />
    }

    return (
        <div>
<<<<<<< HEAD
            <div className="card container">
                <div className="card bg-black text-white">
                    <h1 className="bg-black text-white card-title-justify">
                        "yo yo yo from the welcome page"
                    </h1>
                    <div className="card-body">
                        {signedInStatus}
                    </div>
                </div>
            </div>
=======
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
>>>>>>> d3442e3679365f68601c7e64206467366c8f5356
            </div>
    )
}

export default WelcomePage