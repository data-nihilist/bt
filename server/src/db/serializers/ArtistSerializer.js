class ArtistSerializer {
    static async summarize(array) {
        const serializedArtists = await Promise.all(
            array.map(async (artist) => {
                const requiredAttributes = [
                    "id",
                    "name",
                    "genre",
                    "originCity",
                    "description",
                    "userId",
                    "image"
                ]

                let serializedArtist = {}
                for (const attribute of requiredAttributes) {
                    serializedArtist[attribute] = artist[attribute]
                }
                return serializedArtist
            })
        );
        return serializedArtists
    }
}

export default ArtistSerializer