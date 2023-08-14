import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const VenueList = (props) => {

    const [venues, setVenues] = useState([])

    const getVenues = async () => {
        try{
            const response = await fetch("/api/v1/venues")
            if(!response.ok) {
                throw(new Error(`${response.status} (${response.statusText})`))
            }
            const responseBody = await response.json()
            setVenues(responseBody.venues)

        }catch(error){
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getVenues()
    }, [])

    const listOfVenues = venues.map(venue => {
        return (
            <li
                className="callout secondary"
                key={venue.id}
            >
                <Link
                to="/"
                >
                    {venue.name}
                </Link>
            </li>
        )
    })

    return(
        <div>
            <h1>Welcome to the Venue List: This is a list of Venues B)</h1>

            {listOfVenues}
        </div>
    )
}

export default VenueList