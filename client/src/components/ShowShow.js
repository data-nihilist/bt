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
    // console.log(props.match.params.venueId)
    // related bands state here
    // console.log(props)
    // console.log(showId)
    // console.log(props.match.params)

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

    console.log(show)
    return (
        <h1>
            I freakin love salami
        </h1>
    )
}

export default ShowShow