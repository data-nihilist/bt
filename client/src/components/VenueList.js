import React, { useState, useEffect } from "react"
import VenueTile from "./VenueTile.js"

const VenueList = (props) => {

    const signedInUser = props.signedInUser

    const venues = props.venues

    const listOfVenues = venues.map(venue => {
        return (
            <div
            key={venue.id}
            className="callout"
            >
                <VenueTile
                    name={venue.name}
                    location={venue.location}
                />
            </div>
        )
    })
    
    return(
        <div>
            <h1>Welcome to the Venue List: This is a list of Venues B)</h1>
            <ul>
                {listOfVenues}
            </ul>
        </div>
    )
}

export default VenueList