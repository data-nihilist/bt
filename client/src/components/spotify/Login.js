import React from 'react'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=99671371d9c947e981592b87c1a601db&response_type=code&redirect_uri=http://localhost:3000/showplayground&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
AUTH_URL_HEROKU="https://accounts.spotify.com/authorize?client_id=99671371d9c947e981592b87c1a601db&response_type=code&redirect_uri=https://get-to-the-gig-9923dd0273ee.herokuapp.com/showplayground&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"


export default function Login() {
    return (
        <div className="btn-green text-black">
            <a className="button" href={AUTH_URL_HEROKU} value="Login With Spotify">
                Login With Spotify
            </a>
        </div>
    )
}