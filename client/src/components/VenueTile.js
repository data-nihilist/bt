import React from "react"

const VenueTile = ({name, location}) => {
    return(
        <div>
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