import express from "express"
import Show from "../../../models/Show.js"
import Venue from "../../../models/Venue.js"
import objection from "objection"
const { ValidationError } = objection

const venueShowsRouter = new express.Router({mergeParams: true})

venueShowsRouter.get("/", async (req, res) => {
    try{
        const shows = await Show.query()
        return res.status(200).json({shows})
    }catch(error){
        return res.status(500).json({errors: error})
    }
})

venueShowsRouter.post("/", async (req, res) => {
    const body = req.body
    body.hostId = req.user.id
    body.venueId = req.params.venueId
    console.log(body)
    try{
        const newShow = await Show.query().insertAndFetch(body)
        return res.status(201).json({ newShow })
    }catch(error) {
        if (error instanceof ValidationError) {
            return res.status(422).json({ errors: error.data })
        }
        return res.status(500).json({ errors: error })
    }
})

venueShowsRouter

export default venueShowsRouter