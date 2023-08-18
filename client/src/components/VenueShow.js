import React, { useState, useEffect } from "react"
import ShowList from "./ShowList.js"
import ShowForm from "./ShowForm.js"

const VenueShow = (props) => {
    const [venue, setVenue] = useState({
        name: "",
        location: "",
        hostId: null,
        image: ""
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

    const currentUser = props.user
    
    return (
        <div>
            <h1>
                {venue.name}
            </h1>
            <h1>
                {venue.location}
            </h1>
            <div className="imageShow">
                <img src={venue.image} />
            </div>
            <hr></hr>
            <>
                <h1>
                    Upcoming Shows @{venue.name}
                </h1>
                <ShowList
                    venueId={venueId}
                    shows={venueShows}
                />
            </>
            {currentUser
                && currentUser.id === venue.hostId
                && <ShowForm venue={venue} shows={venueShows} setVenueShows={setVenueShows} />
            }
        </div>
    )
}

export default VenueShow