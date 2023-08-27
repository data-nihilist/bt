import React from "react"
import { Link } from "react-router-dom"

const VenueTile = ({ name, location, shows, venue }) => {

    const showFlyers = shows.map((show) => {
        return (
            <Link to={`/venues/${venue.name}/${show.id}`} key={show.id}>
                <img className="imageTile pl-1" src={show.image} />
            </Link>
        )
    })

    return (
        <div>
            <Link to={`/venues/${venue.name}`} >
            <h2>
                {name}
            </h2>
            </Link>
            <p>
                {location}
            </p>
            {showFlyers}
        </div>
    )
}

export default VenueTile