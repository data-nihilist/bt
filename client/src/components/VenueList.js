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
        </div>
    )
}

export default VenueList