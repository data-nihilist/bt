import React, { useState, useEffect } from "react"
import VenueForm from "./VenueForm.js"

const VenueList = (props) => {

    const signedInUser = props.signedInUser

    const venues = props.venues

    const listOfVenues = venues.map(venue => {
        return (
            <div classname="card">
                <ul>
                    <li
                    className="card-title"
                    key={venue.id}
                    >
                        {venue.name}
                    </li>
                        <p className="card-body">
                            {venue.location}
                        </p>
                </ul>
            </div>
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
        <div className="card">
            <h1 className="card-title">
                Currently Active Venues
            </h1>
            <div className="card">
            {listOfVenues}
            </div>
            {message}
        </div>
    )
}

export default VenueList