import React, { useState, useEffect } from "react"
import ShowList from "./ShowList.js"

const VenueShow = (props) => {
    const currentUser = props.user
    const [venue, setVenue] = useState({
        name: "",
        location: "",
        hostId: null,
        shows: [] // yet to build out this model/component-tree/migration
    })

    const venueId = props.match.params.id

    const getVenue = async () => {
        try {
            const response = await fetch(`/api/v1/venues/${venueId}`)
            if (!response.ok) {
                throw (new Error(`${response.status} (${response.statusText})`))
            }
            const body = await response.json()
            setVenue(body.venue)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getVenue()
    }, [])

    let message;
    if (currentUser) {
        message = "thank you for signing in :)" // some component that encourages active users to become a host
        if (currentUser.id === venue.hostId) {
            message = "your venue awaits! We should have shows..." // button that will lead to a show form page for this venue
        } else {
            message = "heeeey this ain't your venue! Thats okay :)" // same as first iteration
        }
    } else {
        message = "you aren't signed in!" // some component encouraging non-active users to signup
    }

    // const relatedShows = venue.shows.map((show) => {
    //     return (
    //         <li
    //             className="callout"
    //             key={show.id}
    //         >
    //             <h1>
    //                 {show.title}
    //             </h1>
    //             <h3>
    //                 {show.date}
    //             </h3>
    //         </li>
    //     )
    // })


    return (
        <div>
            <h1>
                {venue.name}
            </h1>
            <h1>
                {venue.location}
            </h1>
            <hr></hr>
            <ul>
                <h1>
                    Upcoming Shows @{venue.name}
                </h1>
                <ShowList
                shows={venue.shows}
                />
            </ul>
            <h2>
                {message}
            </h2>
        </div>
    )
}

export default VenueShow