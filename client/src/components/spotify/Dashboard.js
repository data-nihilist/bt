import React, { useState, useEffect } from "react"
import useAuth from "./useAuth.js"
import SpotifyWebApi from 'spotify-web-api-node'
import TrackSearchResult from "./TrackSearchResult"
import Playlist from "./Playlist.js"

const spotifyApi = new SpotifyWebApi({
    clientId: "99671371d9c947e981592b87c1a601db"
})

export default function Dashboard({ code }) {
    const accessToken = useAuth(code)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

        let cancel = false
        spotifyApi.searchTracks(search).then(res => {
            if (cancel) return
            setSearchResults(res.body.tracks.items.map(track => {
                const smallestAlbumImage = track.album.images.reduce((smallest,
                    image) => {
                    if (image.height < smallest.height) return image
                    return smallest
                }, track.album.images[0])

                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: smallestAlbumImage.url
                }
            })
            )
        })
        return () => cancel = true
    }, [search, accessToken])

    const handleInputChange = (event) => {
        setSearch(
            event.currentTarget.value
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSearch("")
    }

    return (
        <div className="bg-black" >
            <form onSubmit={handleSubmit} className="card">
                <label htmlFor="search" className="card-body">
                    <input
                        id="search"
                        type="text"
                        name="search"
                        value={search}
                        onChange={handleInputChange}
                        placeholder="Search Songs/Artists"
                        className="bg-black card text-white"
                    />
                </label>
                <input className="bg-black text-white btn-gray" type="submit" value="Clear Search" />
            </form>

            <div className="container" style={{ overflowY: "auto" }}>
                <div className="card">
                    {searchResults.map(track => (
                        <TrackSearchResult
                            key={track.uri}
                            track={track}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}