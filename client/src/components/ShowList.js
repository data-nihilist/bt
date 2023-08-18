import React from "react"
import ShowTile from "./ShowTile.js"
import { Link } from "react-router-dom"

const ShowList = ({venueId, shows}) => {
    const upcomingShows = shows.map((show) => {
        return (
            <div>
                    <li
                        key={show.id}
                    >
                    <Link to={`/venues/${venueId}/${show.id}`}>
                        <ShowTile
                            hostId={show.hostId}
                            title={show.title}
                            date={show.date}
                            image={show.image}
                            doors={show.doors}
                            shows={shows}
                        />
                    </Link>
                        <hr></hr>
                    </li>
            </div>
        )
    })

    return (
        <div className="callout">
            <ul>
                {upcomingShows}
            </ul>
        </div>
    )
}

export default ShowList