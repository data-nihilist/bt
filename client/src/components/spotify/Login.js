import React from 'react'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=99671371d9c947e981592b87c1a601db&response_type=code&redirect_uri=http://localhost:3000/venues&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"


export default function Login() {
    return (
        <div>
            <a className="button" href={AUTH_URL} value="Login With Spotify">
                Login With Spotify
            </a>
        </div>
    )
}