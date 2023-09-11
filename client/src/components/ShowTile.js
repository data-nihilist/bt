import React from "react"

const ShowTile = ({ hostId, title, date, image, doors, show, currentUser, deleteShow }) => {

    const handleDeleteClick = (event) => {
        event.preventDefault();
        if(window.confirm("Are you sure you want to delete this show?")) {
            deleteShow(title)
        }
    }

    const deleteButton = currentUser && currentUser.id === hostId ? (
        <input className="btn-complement-red" type="button" value="Delete Show" onClick={handleDeleteClick} />
    ) : null;

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
            {deleteButton}
        </>
    )
}

export default ShowTile