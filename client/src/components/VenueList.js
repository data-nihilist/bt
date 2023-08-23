import React from "react"
import VenueTile from "./VenueTile.js"
import { Link } from "react-router-dom";

const VenueList = ({ venues }) => {

    const listOfVenues = venues.map(venue => {
        return (
            <div>
                    <Link to={`/venues/${venue.id}`}>
                        <VenueTile
                            id={venue.id}
                            name={venue.name}
                            location={venue.location}
                            image={venue.image}
                            shows={venue.shows}
                        />
                    </Link>
            </div>
        )
    })

    let message = "Currently Active Venues B)"
    if (listOfVenues.length === 0) {
        message = "Aw jeez... looks like nobody is throwing any shows :c"
    }

    return (
        <div>
            <h1>{message}</h1>
            <div>
                {listOfVenues}
            </div>
        </div>
    )
}

export default VenueList