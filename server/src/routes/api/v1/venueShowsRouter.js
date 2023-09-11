import express from "express"
import Show from "../../../models/Show.js"
import Venue from "../../../models/Venue.js"
import ShowSerializer from "../../../db/serializers/ShowSerializer.js"
import uploadImage from "../../../db/services/uploadImage.js"

const venueShowsRouter = new express.Router({ mergeParams: true })

venueShowsRouter.get("/", async (req, res) => {
    const showId = req.params.id
    try {
        const show = await Show.query().findById(showId)
        const serializedShow = await ShowSerializer.getInfo(show)
        return res.status(200).json({ serializedShow })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

venueShowsRouter.post("/", uploadImage.single("image"), async (req, res) => {
    const venueName = req.params.name
    const venue = await Venue.query().where({ name: venueName })
    const foundVenue = venue[0]
    try {
        const body = req.body;
        body.hostId = req.user.id
        body.venueId = foundVenue.id
        const data = {
            ...body,
            image: req.file.location,
        }
        const newShow = await Show.query().insertAndFetch(data)
        return res.status(201).json({ newShow })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

venueShowsRouter.delete("/", async (req, res) => {
    const showTitle = req.params.id;
    try{
        const showToDelete = await Show.query().findOne({title: showTitle})
        await showToDelete.$query().delete();
        return res.json({ message: 'Show successfully deleted' });
    }catch(error){
        console.error(error)
        return res.status(500).json({ errors: error })
    }
})

export default venueShowsRouter