import React from "react"
import { Link } from "react-router-dom"

const VenueTile = ({ name, location, shows, venue, currentUser, deleteVenue }) => {
    const showFlyers = shows.map((show) => {
        return (
            <Link to={`/venues/${venue.name}/${show.id}`} key={show.id}>
                <img className="imageTile pl-1" src={show.image} />
            </Link>
        )
    })

    const handleDeleteClick = (event) => {
        event.preventDefault()
        if(window.confirm("Are you sure you want to delete this venue?")) {
            deleteVenue(venue.name)
        }
    }
    
    const deleteButton = currentUser && currentUser.id === venue.hostId ? (
        <input className="btn-complement-red" type="button" value="Delete Venue" onClick={handleDeleteClick} />
    ) : null;

    return (
        <div>
            <Link to={`/venues/${venue.name}`} >
            <h2>
                {name}
            </h2>
            </Link>
            {deleteButton}
            <p>
                {location}
            </p>
            {showFlyers}
        </div>
    )
}

export default VenueTile