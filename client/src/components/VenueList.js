import React, { useState, useEffect } from "react"
import VenueForm from "./VenueForm.js"

const VenueList = (props) => {

    const signedInUser = props.signedInUser

    const venues = props.venues

    const listOfVenues = venues.map(venue => {
        return (
            <li
            className="callout secondary"
            key={venue.id}
            >
                {venue.name}
            </li>
        )
    })
    let message = "Sign Up or Sign In to create a venue :D"
    if(signedInUser) {
    message =   <VenueForm
                    signedInUser={signedInUser}
                    venues={venues}
                    setVenues={props.setVenues}
                />
    }
    
    return(
        <div>
            <h1>Welcome to the Venue List: This is a list of Venues B)</h1>
            {listOfVenues}
            {message}
        </div>
    )
}

export default VenueList