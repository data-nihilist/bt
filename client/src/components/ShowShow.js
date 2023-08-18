import React, { useState } from "react"

const ShowShow = (props) => {
    // console.log(props.match.params.venueId)
    const [show, setShow] = useState({
        title: "",
        date: "",
        doors: ""
    })
const showId = props.match.params.id
console.log(showId)
console.log(props.match.params)

    return (
        <div>
            I freakin' love salami!
        </div>
    )
}

export default ShowShow