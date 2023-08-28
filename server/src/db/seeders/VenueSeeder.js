import { User, Venue } from "../../models/index.js"

class VenueSeeder {
    static async seed() {

        const matty = await User.query().findOne({ username: "matty" })
        const jesse = await User.query().findOne({ username: "jesse" })
        const charlie = await User.query().findOne({ username: "charlie" })
        const pad = await User.query().findOne({ username: "pad" })
        const james = await User.query().findOne({ username: "james" })
        const zank = await User.query().findOne({ username: "zank" })
        const garrett = await User.query().findOne({ username: "garrett" })

        const venues = [
            {
                name: "Sicko Pitt",
                location: "Boardman Street, Amesbury, MA",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/darksouls1map.webp",
                hostId: matty.id
            },
            {
                name: "Antediluvian Penetralia Chamber",
                location: "Eastern Parkway, Crown Heights, Brooklynn, NY",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/antedilvuian.jpeg",
                hostId: jesse.id
            },
            {
                name: "Chaz's Chai Latte",
                location: "Brooklyn, NY",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/chazChaiLatte.jpeg",
                hostId: charlie.id
            },
            {
                name: "Paddy's Palace",
                location: "18 Park Ave, Somerville, MA",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/paddyspalace.avif",
                hostId: pad.id
            },
            {
                name: "Zelda's Castle",
                location: "Brown Street, Amesbury, MA",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/zeldascastle.avif",
                hostId: james.id
            },
            {
                name: "The Peach",
                location: "798-600 Greystone Park NE, Atlanta, GA 30324",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/thepeach.avif",
                hostId: zank.id
            },
            {
                name: "MetaKnight's Chasm",
                location: "66 Addington Rd, Brookline, MA 02445",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/metaknightschasm.jpeg",
                hostId: garrett.id
            },
        ]

        for (const singleVenue of venues) {
            const currentVenue = await Venue.query().findOne({ name: singleVenue.name })
            if(!currentVenue) {
                await Venue.query().insert(singleVenue)
            }
        }
    }
}

export default VenueSeeder