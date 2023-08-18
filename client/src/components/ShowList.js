import React from "react"
import ShowTile from "./ShowTile.js"
import { Link } from "react-router-dom"

const ShowList = ({ venueId, shows}) => {

    console.log(venueId)

    const upcomingShows = shows.map((show) => {
        return (
            <div>
                    <li
                        key={show.id}
                    >
                        <ShowTile
                            title={show.title}
                            date={show.date}
                            image={show.image}
                            doors={show.doors}
                        />
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