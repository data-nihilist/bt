import React from "react"

const VenueTile = ({ name, location, shows }) => {

    const showFlyers = shows.map((show) => {
        return (
            <img className = "imageTile" src={show.image} />
        )
    })

    return (
            <div className="callout">
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