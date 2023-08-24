import React, { useState, useEffect } from "react"
import Playlist from "./spotify/Playlist.js"
import { Link } from "react-router-dom"

const ShowShow = (props) => {
    const venueId = props.match.params.venueId
    const showId = props.match.params.id

    const [show, setShow] = useState({
        hostId: "",
        title: "",
        date: "",
        image: "",
        doors: ""
    })

    const [tracks, setTracks] = useState([])


    const getShow = async () => {
        try {
            const response = await fetch(`/api/v1/venues/${venueId}/${showId}`)
            const body = await response.json()
            const showData = body.serializedShow
            setShow(showData)
            setTracks(showData.tracks)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getShow()
    }, [])

    const currentUser = props.user
    console.log(currentUser)
    console.log(show.hostId)

        const playgroundButton = (
            <div className="callout button-group">
                <Link to="/showplayground">
                    <input className="button" type="button" value="Add Tracks To Your Show!"/>
                </Link>
            </div>
        )

        
    

    return (
        <div>
            <h1>
                {show.title}
            </h1>
            <h2>Doors @ {show.doors}</h2>
                {`${show.title}'s Playlist`}
            <div>
                <Playlist
                tracks={tracks}
                />
            </div>
            <img src={show.image} />
            <h3>{show.date}</h3>
            {currentUser
                && currentUser.id === show.hostId
                && playgroundButton}
        </div>
    )
}

export default ShowShow