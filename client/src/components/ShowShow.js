import React, { useState, useEffect } from "react"

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


    const getShow = async () => {
        try{
            const response = await fetch(`/api/v1/venues/${venueId}/${showId}`)
            const body = await response.json()
            const showData = body.serializedShow
            setShow(showData)
        }catch(error){
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getShow()
    }, [])

    return (
        <div>
            <h1>
                {show.title}
            </h1>
            <img src={show.image}/>
            <h2>Doors @ {show.doors}</h2>
            <h3>{show.date}</h3>
        </div>
    )
}

export default ShowShow