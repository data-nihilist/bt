import React, { useState, useEffect } from "react"
import Playlist from "./spotify/Playlist.js"
import { Link } from "react-router-dom"
import ArtistList from "./ArtistList.js"

const ShowShow = (props) => {
    const venueName = props.match.params.name
    const showId = props.match.params.id

    const [show, setShow] = useState({
        hostId: "",
        title: "",
        date: "",
        image: "",
        doors: ""
    })
    
    const [tracks, setTracks] = useState([])
    const [artists, setArtists] = useState([])
    
    const getShow = async () => {
        try {
            const response = await fetch(`/api/v1/venues/${venueName}/${showId}`)
            const body = await response.json()
            const showData = body.serializedShow
            setShow(showData)
            setTracks(showData.tracks)
            setArtists(showData.artists)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }
    
    useEffect(() => {
        getShow()
    }, [])
    
    const currentUser = props.user
    
    const playgroundButton = (
        <div className="mt-4 pb-2">
            <Link to="/showplayground">
                <input className="special-button" type="button" value="Build Your Show!" />
            </Link>
        </div>
    )
    
    const presentedBy = () => {
        return (
            <Link to={`/venues/${venueName}`}>
                <h2>
                    {venueName} Presents
                </h2>
            </Link>
        )
    }
    
    console.log(show)
    
    return (
        <div className="bg-black">
            <div className="card bg-black text-white">
                <div className="card responsive-test">
                    {presentedBy()}
                    <h1 className="card-title bg-black text-white">
                        {show.title}
                    </h1>
                    <h3>{show.date}</h3>
                    <h2>Doors @ {show.doors}</h2>
                </div>
                <div className="container">
                    <img src={show.image} />
                        <ArtistList
                            artists={artists}
                        />
                        <h4>{`${show.title}'s Playlist`}</h4>
                        <Playlist
                            tracks={tracks}
                        />
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