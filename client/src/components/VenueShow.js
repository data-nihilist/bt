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
    const [venueAnnouncements, setVenueAnnouncements] = useState([])
    
    const venueId = props.match.params.name
    const currentUser = props.user
    const venueName = venue.name;

    const getVenue = async () => {
        try {
            const response = await fetch(`/api/v1/venues/${venueId}`)
            if (!response.ok) {
                throw (new Error(`${response.status} (${response.statusText})`))
            }
            const body = await response.json()
            setVenue(body.serializedVenue)
            setVenueShows(body.serializedVenue.shows)
            setVenueAnnouncements(body.serializedVenue.announcements)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getVenue()
    }, [])

    const deleteShow = async (showId) => {
        try {
            const response = await fetch(`/api/v1/venues/${venueName}/${showId}`, {
                method: 'DELETE',
                headers: {
                    Accept: "application/json",
                },
            })
            if(!response.ok){
                throw(new Error(`${response.status} (${response.statusText})`));
            }
            const updatedVenueShows = venueShows.filter(show => show.title !== showId);
            setVenueShows(updatedVenueShows);
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`);
        }
    }

    let i = 0;
    const bulletin = venueAnnouncements.map((announcement) => {
        i++;
        return (
            <div className="card">
                <h3> {venue.name} ANNOUNCEMENTS </h3>
                <h6>{i}.) {announcement.update}</h6>
            </div>
        )
    })

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
                {bulletin}
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
                        deleteShow={deleteShow}
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