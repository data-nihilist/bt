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
        <div className="mt-4 pb-2">
            <Link to="/showplayground">
                <input className="special-button" type="button" value="Add Tracks To Your Show!" />
            </Link>
        </div>
    )




    return (
        <div className="bg-black">
            <div className="card bg-black text-white">
                <div className="card">
                    <h1 className="card-title bg-black text-white">
                        {show.title}
                    </h1>
                    <h3>{show.date}</h3>
                    <h2>Doors @ {show.doors}</h2>
                </div>
                <div className="container">
                    <img src={show.image} />
                    <div className="card">
                    <h4>{`${show.title}'s Playlist`}</h4>
                        <Playlist
                            tracks={tracks}
                        />
                    </div>
                        <>
                            {currentUser
                                && currentUser.id === show.hostId
                                && playgroundButton}
                        </>
                    </div>
                </div>
            </div>
    )
}

export default ShowShow