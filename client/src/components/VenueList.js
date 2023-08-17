import React from "react"
import VenueTile from "./VenueTile.js"
import { Link } from "react-router-dom";

const VenueList = (props) => {

    const listOfVenues = props.venues.map(venue => {
        return (
            <div
                className="callout"
            >
                    <Link to={`/venues/${venue.id}`}>
                        <VenueTile
                            id={venue.id}
                            name={venue.name}
                            location={venue.location}
                            image={venue.image}
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