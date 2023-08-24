import React from "react"
import { Link } from "react-router-dom"

const VenueTile = ({ id, name, location, shows }) => {

    const showFlyers = shows.map((show) => {
        return (
            <img className="imageTile pl-1" src={show.image} key={show.id} />
        )
    })

    return (
        <div key={id}>
            <h2>
                {name}
            </h2>
            <p>
                {location}
            </p>
            {showFlyers}
        </div>
    )
}

export default VenueTile