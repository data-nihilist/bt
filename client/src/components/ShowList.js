import React from "react"
import ShowTile from "./ShowTile.js"

const ShowList = ({shows}) => {

    const upcomingShows = shows.map((show) => {
        return (
            <ShowTile
            key={show.id}
            title={show.title}
            date={show.date}
            image={show.image}
            />
        )
    })

    return(
        <ul className="callout">
            {upcomingShows}
        </ul>
    )
}

export default ShowList