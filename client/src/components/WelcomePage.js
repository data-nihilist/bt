import React, { useState, useEffect } from "react"
import VenueList from "./VenueList"


const WelcomePage = (props) => {
    const signedInUser = props.user

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
    
    let signedInStatus = <h2>You're not signed in!</h2>
    if(signedInUser){
        signedInStatus = <VenueList
                            venues={venues}
                            signedInUser={signedInUser}
                            setVenues={setVenues}
                        />
    }

    return(
        <div>
            <h1>
                "yo yo yo from the welcome page"
            </h1>
            <div>
                {signedInStatus}
            </div>
        </div>
    )
}

export default WelcomePage