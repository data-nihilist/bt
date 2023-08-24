import express from "express"
import Show from "../../../models/Show.js"
import ShowSerializer from "../../../db/serializers/ShowSerializer.js"
import uploadImage from "../../../db/services/uploadImage.js"

const venueShowsRouter = new express.Router({mergeParams: true})

venueShowsRouter.get("/:id", async (req, res) => {
    const showId = req.params.id
    try{
        const show = await Show.query().findById(showId)
        const serializedShow = await ShowSerializer.getInfo(show)
        return res.status(200).json({serializedShow})
    }catch(error){
        return res.status(500).json({errors: error})
    }
})

venueShowsRouter.post("/", uploadImage.single("image"), async (req, res) => {
    try{
        const body = req.body;
        body.hostId = req.user.id
        body.venueId = req.params.id
        const data = {
            ...body,
            image: req.file.location,
        }
        const newShow = await Show.query().insertAndFetch(data)
        return res.status(201).json({ newShow })
    } catch(error) {
        return res.status(500).json({ errors: error })
    }
})


export default venueShowsRouter