import React from "react"
import { Link } from "react-router-dom"


const WelcomePage = (props) => {

    return(
        <div>
            <h1>
                "yo yo yo from the welcome page"
            </h1>
            <Link to="/venues">
                Local Venues List Page
            </Link>
        </div>
    )
}

export default WelcomePage