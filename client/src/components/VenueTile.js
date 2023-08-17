import React from "react"

const VenueTile = ({ id, name, location, image }) => {
    return (
        <div>
            <li
            key={id}
            >
            <div className="imageTile">
                <img src={image} />
            </div>
            <h2>
                {name}
            </h2>
            <p>
                {location}
            </p>
            </li>
        </div>
    )
}

export default VenueTile