import express from "express"
import Venue from "../../../models/Venue.js"
import venueShowsRouter from "./venueShowsRouter.js"
import VenueSerializer from "../../../db/serializers/VenueSerializer.js"
import uploadImage from "../../../db/services/uploadImage.js"

const venuesRouter = new express.Router()

venuesRouter.get("/", async (req, res) => {
    try{
        const venues = await Venue.query()
        const serializedVenues = await VenueSerializer.summarize(venues)
        return res.status(200).json({ venues: serializedVenues})
    }catch(error){
        return res.status(500).json({errors: error})
    }
})

venuesRouter.post("/", uploadImage.single("image"), async (req, res) => {
    try{
        const body = req.body
        const data = {
            ...body,
            image: req.file.location,
        }
        const newVenue = await Venue.query().insertAndFetch(data);
        return res.status(201).json({ newVenue })
    } catch(error) {
        return res.status(500).json({ errors: error })
    }
})

venuesRouter.get("/:id", async (req, res) => {
    const venueId = req.params.id
    try{
        const venue = await Venue.query().findById(venueId)
        const serializedVenue = await VenueSerializer.withRelated(venue)
        return res.status(200).json({ venue: serializedVenue })
    }catch(error){
        return res.status(500).json({errors: error})
    }
})

venuesRouter.get(":id/shows", async (req, res) => {
    const venueId = req.params.id
    console.log(venueId)
})

venuesRouter.use("/:id/shows", venueShowsRouter)

export default venuesRouter