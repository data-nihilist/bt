import React from "react"
import VenueTile from "./VenueTile.js"
import { Link } from "react-router-dom";

const VenueList = (props) => {

    const listOfVenues = props.venues.map(venue => {
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
                        image={venue.image}
                    />
                </Link>
            </div>
        )
    })

    let message = "Currently Active Venues B)"
    if(listOfVenues.length === 0){
        message = "Aw jeez... looks like nobody is throwing any shows :c"
    }

    return (
        <div>
            <h1>{message}</h1>
            <ul>
                {listOfVenues}
            </ul>
        </div>
    )
}

export default VenueList