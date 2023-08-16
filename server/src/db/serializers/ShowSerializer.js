class ShowSerializer {
    static async summarize(array) {
        const serializedShows = await Promise.all(
            array.map( async (show) => {
                const requiredAttributes = ["id", "title", "date", "venueId", "hostId"]

                let serializedShow = {}
                for(const attribute of requiredAttributes) {
                    serializedShow[attribute] = show[attribute]
                }
                return serializedShow
            })
        );
        return serializedShows
    }
}

export default ShowSerializer