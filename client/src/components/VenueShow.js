import React, { useState, useEffect } from "react"
import ShowList from "./ShowList.js"
import ShowForm from "./ShowForm.js"
import SimpleJsApiLoaderGoogleMap from "./maps/simpleJsApiLoaderGoogleMap.js"

const VenueShow = (props) => {
    const [venue, setVenue] = useState({
        name: "",
        location: "",
        hostId: null,
        image: ""
    })
    const [venueShows, setVenueShows] = useState([])

    const venueId = props.match.params.name

    const getVenue = async () => {
        try {
            const response = await fetch(`/api/v1/venues/${venueId}`)
            if (!response.ok) {
                throw (new Error(`${response.status} (${response.statusText})`))
            }
            const body = await response.json()
            setVenue(body.serializedVenue)
            setVenueShows(body.serializedVenue.shows)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getVenue()
    }, [])

    const currentUser = props.user

    return (
        <div className="bg-black text-white">
        <div className="container">
            <h1 className="card-title bg-black text-white">
                {venue.name}
            </h1>
            <h1 className="card-body bg-black text-white">
                {venue.location}
            </h1>
            <div>
                <img src={venue.image} className="imageShow" />
            </div>
            <hr></hr>
            <div>

            </div>
                <div className="card">
                    <SimpleJsApiLoaderGoogleMap
                        venueQuery={`${venue.location}`} />
                </div>
            <div className="card">
                    <ShowList
                        venue={venue}
                        shows={venueShows}
                        currentUser={currentUser}
                    />
                {currentUser
                    && currentUser.id === venue.hostId
                    && <ShowForm venue={venue} shows={venueShows} setVenueShows={setVenueShows} />}
            </div>
        </div>
        </div>
    )
}

export default VenueShow