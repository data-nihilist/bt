import ShowSerializer from "./ShowSerializer.js"

class VenueSerializer {
    static async summarize(array) {
        const serializedVenues = array.map((venue) => {
            const desiredAttributes = [
                "id",
                "name",
                "location",
                "hostId",
                "image"
            ];
    
            let serializedVenue = {};
            for (const attribute of desiredAttributes) {
                serializedVenue[attribute] = venue[attribute]
            }
            return serializedVenue;
        })

        return serializedVenues
    }

    static async withRelated(venue) {

            const desiredAttributes = [
                "id",
                "name",
                "location",
                "hostId",
                "image"
            ];
    
            let serializedVenue = {};
            for (const attribute of desiredAttributes) {
                serializedVenue[attribute] = venue[attribute]
            }

            const shows = await venue.$relatedQuery("shows")
            serializedVenue.shows = await ShowSerializer.summarize(shows)

            return serializedVenue;

    }

    static async withShows(array) {
        const serializedVenues = await Promise.all(
            array.map(async (venue) => {
                const desiredAttributes = [
                    "id",
                    "name",
                    "location",
                    "hostId",
                    "image"
                ];
        
                let serializedVenue = {};
                for (const attribute of desiredAttributes) {
                    serializedVenue[attribute] = venue[attribute]
                }
                serializedVenue.shows = await venue.$relatedQuery("shows")
                return serializedVenue;
            })
        );
        return serializedVenues
    }
}

export default VenueSerializer