class TrackSerializer {
    static async summarize(array) {
        const serializedTracks = await Promise.all(
            array.map(async (track) => {
                const requiredAttributes = [
                    // "id",
                    "artist",
                    "title",
                    "uri",
                    "albumUrl",
                    "userId",
                ]

                let serializedTracks = {}
                for (const attribute of requiredAttributes) {
                    serializedTracks[attribute] = track[attribute]
                }
                return serializedTracks
            })
        );
        return serializedTracks
    }
}

export default TrackSerializer