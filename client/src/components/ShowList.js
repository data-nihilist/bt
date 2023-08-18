import React from "react"
import ShowTile from "./ShowTile.js"
import { Link } from "react-router-dom"

const ShowList = ({ venueId, shows}) => {

    console.log(venueId)

    const upcomingShows = shows.map((show) => {
        return (
            <div>
                <Link to={`/venues/${venueId}/${show.id}`}>
                    <ShowTile
                        key={show.id}
                        title={show.title}
                        date={show.date}
                        image={show.image}
                    />
                </Link>
            </div>
        )
    })

    return(
        <ul className="callout">
            {upcomingShows}
        </ul>
    )
}

export default ShowList