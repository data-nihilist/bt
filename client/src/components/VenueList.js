import React from "react"
import VenueTile from "./VenueTile.js"
import { Link } from "react-router-dom";

const VenueList = ({ venues }) => {

    const listOfVenues = venues.map(venue => {
        return (
            <Link to={`/venues/${venue.id}`} key={venue.id}>
                <VenueTile
                    id={venue.id}
                    name={venue.name}
                    location={venue.location}
                    image={venue.image}
                    shows={venue.shows}
                />
            </Link>
        )
    })

    let message = ""
    if (listOfVenues.length === 0) {
        message = "Aw jeez... looks like nobody is throwing any shows :c"
    }

    return (
        <div className="card">
            <h1>{message}</h1>
            {listOfVenues}
        </div>
    )
}

export default VenueList