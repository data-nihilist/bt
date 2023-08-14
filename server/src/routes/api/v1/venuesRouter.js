import express from "express"
import Venue from "../../../models/Venue.js"

const venuesRouter = new express.Router()

venuesRouter.get("/", async (req, res) => {
    try{
        const venues = await Venue.query()
        return res.status(200).json({venues})
    }catch(error){
        return res.status(500).json({errors: error})
    }
})

venuesRouter.post("/", async (req, res) => {
    const body = req.body
        try{
            const newVenue = await Venue.query().insertAndFetch(body)
            return res.status(201).json({ newVenue })
        }catch(error){
            return res.status(500).json({ errors: error })
        }
})

export default venuesRouter