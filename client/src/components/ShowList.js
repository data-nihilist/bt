import React from "react"
import ShowTile from "./ShowTile.js"
import { Link } from "react-router-dom"

const ShowList = ({ venue, shows, currentUser, deleteShow }) => {

    const upcomingShows = shows.map((show) => {
        return (
                    <Link to={`/venues/${venue.name}/${show.id}`} key={show.id}>
                        <ShowTile
                            hostId={show.hostId}
                            title={show.title}
                            date={show.date}
                            image={show.image}
                            doors={show.doors}
                            shows={shows}
                            show={show}
                            currentUser={currentUser}
                            deleteShow={deleteShow}
                        />
                    </Link>
        )
    })

    return (
        <div className="card">
            <ul>
                {upcomingShows}
            </ul>
        </div>
    )
}

export default ShowList