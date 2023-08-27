import TrackSerializer from "./TrackSerializer.js"
import ArtistSerializer from "./ArtistSerializer.js"
import Venue from "../../models/Venue.js"

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

                let serializedShow = {}
                for (const attribute of requiredAttributes) {
                    serializedShow[attribute] = show[attribute]
                }
                serializedShow.tracks = await show.$relatedQuery("tracks")
                serializedShow.venue = await Venue.query().findById(show.venueId)
                return serializedShow
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
        const artists = await show.$relatedQuery("artists")
        serializedShow.artists = await ArtistSerializer.summarize(artists)
        serializedShow.venue = await Venue.query().findById(show.venueId)

        return serializedShow
    }
}

export default ShowSerializer