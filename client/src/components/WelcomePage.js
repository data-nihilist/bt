import React, { useState, useEffect } from "react"
import VenueList from "./VenueList"


const WelcomePage = (props) => {
    const signedInUser = props.user

    const [venues, setVenues] = useState([])

    const getVenues = async () => {
        try {
            const response = await fetch("/api/v1/venues")
            if (!response.ok) {
                throw (new Error(`${response.status} (${response.statusText})`))
            }
            const responseBody = await response.json()
            setVenues(responseBody.venues)
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getVenues()
    }, [])

    let signedInStatus = <h2>You're not signed in!</h2>
    if (signedInUser) {
        signedInStatus = <VenueList
            venues={venues}
            signedInUser={signedInUser}
            setVenues={setVenues}
        />
    }

    return (
        // <div>
        //     <div className="card container">
        //         <div className="card bg-black text-white">
        // //             <h1 className="bg-black text-white card-title-justify">
        // //                 "yo yo yo from the welcome page"
        // //             </h1>
        // //             <div className="card-body">
        // //                 {signedInStatus}
        // //             </div>
        // //         </div>
        //     // </div>
            <div className="bg-black text-white">
                <div className="card-sm item-1">
                    1
                </div>
                <div className="card-sm item-1 bg-black text-white">
                    2
                </div>
                <div className="card-sm item-1 bg-black text-white">
                    3
                </div>
                <div className="card-sm item-1 bg-black text-white">
                    4
                </div>
                <div className="card-sm item-1 bg-black text-white">
                    5
                </div>
                <div className="card-sm item-1 bg-black text-white">
                    6
                </div>
                <div className="card-sm item-1 bg-black text-white">
                    7
                </div>
                <div className="card-sm item-1 bg-black text-white">
                    8
                </div>
                <div className="card-sm item-1 bg-black text-white">
                    9
                </div>
                <div className="card-sm item-1 bg-black text-white">
                    10
                </div>
                <div className="card-sm item-1 bg-black text-white">
                    11
                </div>
                <div className="card-sm item-1 bg-black text-white">
                    12
                </div>
            </div>
            // </div>
    )
}

export default WelcomePage