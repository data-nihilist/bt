import React, { useState, useEffect } from "react"

const ShowShow = (props) => {
    // console.log(props.match.params.venueId)
    const [show, setShow] = useState({
        title: "",
        date: "",
        image: "",
        doors: ""
    })
    // related bands state here

    const venueId = props.match.params.venueId
    const showId = props.match.params.id
    console.log(showId)
    // console.log(props.match.params)

    const getShow = async () => {
        try{
            const response = await fetch(`/api/v1/venues/${venueId}`)
            const show = await response.json()
            console.log(show.venue.shows)
        }catch(error){
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    getShow()

    return (
        <div>
            I freakin' love salami!
        </div>
    )
}

export default ShowShow