import React from "react"
import Login from "./spotify/Login"
import Dashboard from "./spotify/Dashboard"

const code = new URLSearchParams(window.location.search).get('code')

function Spotify() {
    return code ? <Dashboard code={code} /> : <Login />

}

export default Spotify