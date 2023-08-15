import React from "react"
import VenueTile from "./VenueTile.js"
import { Link } from "react-router-dom";

const VenueList = (props) => {

    const listOfVenues = props.venues.map(venue => {
        return (
<<<<<<< HEAD
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
=======
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

    return (
        <div>
            <h1>Currently Active Venues B)</h1>
            <ul>
                {listOfVenues}
            </ul>
>>>>>>> d3442e3679365f68601c7e64206467366c8f5356
        </div>
    )
}

export default VenueList