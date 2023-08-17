import React from "react"

const VenueTile = ({ name, location, image }) => {
    return (
        <div>
            <div className="imageTile">
                <img src={image} />
            </div>
            <h2>
                {name}
            </h2>
            <p>
                {location}
            </p>
        </div>
    )
}

export default VenueTile