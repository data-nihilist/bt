import React, { useState, useEffect } from "react"
import ShowList from "./ShowList.js"

const VenueShow = (props) => {
    const [venue, setVenue] = useState({
        name: "",
        location: "",
        hostId: null,
    })
    const [venueShows, setVenueShows] = useState([])
    
    const venueId = props.match.params.id

    const getVenue = async () => {
        try {
            const response = await fetch(`/api/v1/venues/${venueId}`)
            if (!response.ok) {
                throw (new Error(`${response.status} (${response.statusText})`))
            }
            const body = await response.json()
            setVenue(body.venue)
            setVenueShows(body.venue.shows)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }
    
    useEffect(() => {
        getVenue()
    }, [])
    
//----------------------------------------------------------registered user && venue ownership confirmation
    const currentUser = props.user    
    let message;
    let currentUserId = null
    if (currentUser) {
        // some component that encourages active and registered users to become a host
        message = "Thank you for signing in :) This either isn't your venue OR... you should be a host (create a venue)!"
        currentUserId = currentUser.id
        if(currentUserId === venue.hostId) {
            message = "your venue awaits, m'lord! It's showtime B)"
        }
    } else {
            message = "Next time you're online, consider signing up so you can throw a show of your own!"
    }
//--------------------------------------------------------------------------------------------------------
    return (
        <div>
            <h1>
                {venue.name}
            </h1>
            <h1>
                {venue.location}
            </h1>
            <hr></hr>
            <ul>
                <h1>
                    Upcoming Shows @{venue.name}
                </h1>
                <ShowList
                shows={venueShows}
                />
            </ul>
            <h2>
                {message}
            </h2>
        </div>
    )
}

export default VenueShow