import React from "react"

const ShowTile = ({id, title, date}) => {
    return (
        <li
        key={id}
        className="callout"
        >
            <h1>
                {title}
            </h1>
            <h4>
                {date}
            </h4>
        </li>
    )
}

export default ShowTile