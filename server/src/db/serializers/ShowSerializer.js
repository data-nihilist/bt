import TrackSerializer from "./TrackSerializer.js"

class ShowSerializer {
    static async summarize(array) {
        const serializedShows = await Promise.all(
            array.map(async (show) => {
                const requiredAttributes = [
                    "id",
                    "title",
                    "date",
                    "venueId",
                    "hostId",
                    "image",
                    "doors"
                ]

                let serializedShows = {}
                for (const attribute of requiredAttributes) {
                    serializedShows[attribute] = show[attribute]
                }
                return serializedShows
            })
        );
        return serializedShows
    }

    static async getInfo(show) {
        const requiredAttributes = [
            "id",
            "title",
            "date",
            "venueId",
            "hostId",
            "image",
            "doors"
        ]

        let serializedShow = {}
        for (const attribute of requiredAttributes) {
            serializedShow[attribute] = show[attribute]
        }
        
        const tracks = await show.$relatedQuery("tracks")
        serializedShow.tracks = await TrackSerializer.summarize(tracks)

        return serializedShow
    }
}

export default ShowSerializer