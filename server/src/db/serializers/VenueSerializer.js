import ShowSerializer from "./ShowSerializer.js"

class VenueSerializer {
    static async summarize(array) {
        const serializedVenues = array.map((venue) => {
            const requiredAttributes = [
                "id",
                "name",
                "location",
                "hostId",
                "image"
            ];
    
            let serializedVenue = {};
            for (const attribute of requiredAttributes) {
                serializedVenue[attribute] = venue[attribute]
            }

            return serializedVenue;
        })

        return serializedVenues
    }

    static async withRelated(venue) {

            const requiredAttributes = [
                "id",
                "name",
                "location",
                "hostId",
                "image"
            ];
    
            let serializedVenue = {};
            for (const attribute of requiredAttributes) {
                serializedVenue[attribute] = venue[attribute]
            }

            const shows = await venue.$relatedQuery("shows")
            serializedVenue.shows = await ShowSerializer.summarize(shows)

            return serializedVenue;

    }
}

export default VenueSerializer