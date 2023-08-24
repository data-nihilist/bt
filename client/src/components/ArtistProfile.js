import React, { useState, useEffect } from "react"

const ArtistProfile = (props) => {

    const [artist, setArtist] = useState({
        name: "",
        genre: "",
        originCity: "",
        description: "",
        touring: "",
        userId: null
    })

    console.log(props.params.match.id)


    const getArtist = async () => {
        try{
            const artist = await fetch(`/api/v1/artists/${artist.id}`)
            if(!artist.ok) {
                throw(new Error(`${artist.status} (${artist.statusText})`))
            }
            const trveArtist = await artist.json()
            console.log(trveArtist)
            setArtist(trveArtist)
        }catch(error){
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getArtist()
    }, [])

    let touringMessage;
    if(artist.touring) {
        touringMessage = (
            <h3>
                We're touring!
            </h3>
        )
    }
    if(artist.touring === false) {
        touringMessage = (
            <h3>
                No tours scheduled...yet B)
            </h3>
        )
    }

    return(
        <div>
            <h1>
                yo yo yo from the artist profile page B)
            </h1>
            <div>
                <h1>
                    {artist.name}
                </h1>
                <h2>
                    {artist.genre}
                </h2>
                <h3>
                    {artist.originCity}
                </h3>
                <h4>
                    {artist.description}
                </h4>
                <>
                    {touringMessage}
                </>
            </div>
        </div>
    )
}

export default ArtistProfile