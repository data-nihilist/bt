import React from "react"
import VenueTile from "./VenueTile.js"
import { Link } from "react-router-dom";

const VenueList = ({ venues }) => {

    const listOfVenues = venues.map(venue => {
        return (
            // <Link to={`/venues/${venue.name}`} key={venue.id}>
                <VenueTile
                    key={venue.id}
                    name={venue.name}
                    location={venue.location}
                    image={venue.image}
                    shows={venue.shows}
                    venue={venue}
                />
            /* </Link> */
        )
    })

    let message = ""
    if (listOfVenues.length === 0) {
        message = "Aw jeez... looks like nobody is throwing any shows :c"
    }

    const titleHeader = "Get.To.The.Gig."

    return (
        <div className="card">
            <h1>{message}</h1>
            <h1 className="card-title">
                    {titleHeader}
                </h1>
            {listOfVenues}
        </div>
    )
}

export default VenueList