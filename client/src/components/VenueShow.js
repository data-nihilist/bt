import React, { useState, useEffect } from "react"

const VenueShow = (props) => {
    const currentUser = props.user
    const [venue, setVenue] = useState({
        name: "",
        location: "",
        hostId: null,
        shows: [] // yet to build out this model/component-tree/migration
    })
    
    const venueId = props.match.params.id

    const getVenue = async () => {
        try{
            const response = await fetch(`/api/v1/venues/${venueId}`)
            if(!response.ok) {
                throw(new Error(`${response.status} (${response.statusText})`))
            }
            const body = await response.json()
            setVenue(body.venue)
        }catch(error){
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
    getVenue()
    }, [])

    let message;
    if(currentUser){
        message = "thank you for signing in :)"
        if(currentUser.id === venue.hostId) {
            message = "your venue awaits! We should have shows..."
        } else {
            message = "heeeey this ain't your venue! Thats okay :)"
        }
    } else {
        message = "you aren't signed in!"
    }
    console.log(message)
    return(
        <div>
            <h1>
                {venue.name}
            </h1>
            <h1>
            {venue.location}
            </h1>
            <h1>
            {venue.hostId}
            </h1>
            <h1>
            {venue.shows}
            </h1>
            <h2>
            {message}
            </h2>
        </div>
    )
}

export default VenueShow