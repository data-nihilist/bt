import React from "react"

const ShowTile = ({ title, date, image, doors }) => {
    return (
        <>
            <h1>
                {title}
            </h1>
            <img src={image} className="imageTile" />
            <h4>
                {date}
            </h4>
            <h1>
                DOORS @ {doors}
            </h1>
        </>
    )
}

export default ShowTile