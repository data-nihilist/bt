import express from "express"
import Venue from "../../../models/Venue.js"
import venueShowsRouter from "./venueShowsRouter.js"
import VenueSerializer from "../../../db/serializers/VenueSerializer.js"
import uploadImage from "../../../db/services/uploadImage.js"
import User from "../../../models/User.js"

const venuesRouter = new express.Router()

venuesRouter.get("/", async (req, res) => {
    try {
        const venues = await Venue.query()
        const serializedVenues = await VenueSerializer.withShows(venues)
        return res.status(200).json({ venues: serializedVenues })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

venuesRouter.post("/", uploadImage.single("image"), async (req, res) => {
    const trueHostId = req.user.id
    const host = await User.query().findById(trueHostId)
    try {
        const body = req.body
        const data = {
            ...body,
            image: req.file.location,
            hostId: host.id
        }
        const venueRecord = await Venue.query().insertAndFetch(data);
        return res.status(201).json({ venueRecord })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

venuesRouter.get("/:name", async (req, res) => {
    const venueName = req.params.name
    const venue = await Venue.query().where({ name: venueName })
    const foundVenue = venue[0]
    try {
        const serializedVenue = await VenueSerializer.withRelated(foundVenue)
        return res.status(200).json({ serializedVenue })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

venuesRouter.delete("/:name", async (req, res) => {
    const venueName = req.params.name
    console.log("venue name from req.params: ", venueName)
    try{
        const venueToDelete = await Venue.query().findOne({name: venueName})
        console.log("venue to delete: ", venueToDelete)
        await venueToDelete.$query().delete()
        return res.json({ message: 'Venue successfully deleted' });
    }catch(error){
        console.error(error)
        return res.status(500).json({ errors: error })
    }
})

venuesRouter.use("/:name/shows", venueShowsRouter)

export default venuesRouter