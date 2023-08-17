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
            doors={show.doors}
            />
        )
    })

    return(
        <div className="callout">
            {upcomingShows}
        </div>
    )
}

export default ShowList