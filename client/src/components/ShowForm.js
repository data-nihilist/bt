import React, { useState } from "react"
import translateServerErrors from "../services/translateServerErrors"

const ShowForm = (props) => {
    const [showRecord, setShowRecord] = useState({
        hostId: "",
        venueId: "",
        title: "",
        date: ""
    })
}

return (
    <div>
        <h1>Add Shows To Your Venue!</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title"> Show title
                <input
                    id="title"
                    type="text"
                    name="title"
                    value={venueRecord.name}
                    onChange={handleInputChange}
                />
            </label>

            <label htmlFor="date"> Show date
                <input
                    id="date"
                    type="text"
                    name="date"
                    value={venueRecord.location}
                    onChange={handleInputChange}
                />
            </label>

            <div className="button-group">
                <input className="button" type="submit" value="Add Show" />
            </div>
        </form>
    </div>
)

export default ShowForm