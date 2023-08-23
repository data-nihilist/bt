import React, { useState, useEffect } from "react"
import Spotify from "./Spotify.js"

const ShowPlayGround = (props) => {

    const [shows, setShows] = useState([])

    const getShows = async () => {
        try{
            const response = await fetch("/api/v1/shows")
            if(!response.ok){
                throw(new Error(`${response.status} (${response.statusText})`))
            }
            const body = await response.json()
            setShows(body.shows)
        }catch(error){
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getShows()
    }, [])

    const showsToDisplay = shows.map((show) => {
        return(
            <ul>
                <li
                key={show.id}
                >
                <h1>
                    {show.title}
                </h1>
                <h2>
                    {show.date}
                </h2>
                <h3>
                    {show.doors}
                </h3>
                <img src={show.image}/>
                </li>

            </ul>
        )
    })

    return(
        <div>
            <Spotify />
            {showsToDisplay}
        </div>
    )
}

export default ShowPlayGround