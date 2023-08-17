import React from "react"

const ShowTile = ({id, title, date, image}) => {
    return (
        <li
        key={id}
        className="callout"
        >
            <h1>
                {title}
            </h1>
            <img src={image} />
            <h4>
                {date}
            </h4>
        </li>
    )
}

export default ShowTile