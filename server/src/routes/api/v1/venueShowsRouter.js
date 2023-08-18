import express from "express"
import Show from "../../../models/Show.js"
import ShowSerializer from "../../../db/serializers/ShowSerializer.js"
import uploadImage from "../../../db/services/uploadImage.js"

const venueShowsRouter = new express.Router({mergeParams: true})

venueShowsRouter.get("/", async (req, res) => {
    try{
        const shows = await Show.query()
        const serializedShows = await ShowSerializer.summarize(shows)
        return res.status(200).json({serializedShows})
    }catch(error){
        return res.status(500).json({errors: error})
    }
})

venueShowsRouter.post("/", uploadImage.single("image"), async (req, res) => {
    try{
        const body = req.body;
        body.hostId = req.user.id
        body.venueId = req.params.venueId
        console.log("I will become a show! ", body)
        const data = {
            ...body,
            image: req.file.location,
        }
        console.log("I'm the show you're looking for!: ", data)
        const newShow = await Show.query().insertAndFetch(data)
        return res.status(201).json({ newShow })
    } catch(error) {
        return res.status(500).json({ errors: error })
    }
})

export default venueShowsRouter