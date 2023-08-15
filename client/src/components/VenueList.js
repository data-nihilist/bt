import React, { useState, useEffect } from "react"
import VenueTile from "./VenueTile.js"
import { Link } from "react-router-dom";

const VenueList = (props) => {

    const signedInUser = props.signedInUser

    const venues = props.venues

    const listOfVenues = venues.map(venue => {
        return (
            <div
            key={venue.id}
            className="callout"
            >
                <Link to={`/${venue.id}`}>
                    <VenueTile
                        id={venue.id}
                        name={venue.name}
                        location={venue.location}
                    />
                </Link>
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