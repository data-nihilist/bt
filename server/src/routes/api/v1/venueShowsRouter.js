import express from "express"
import Show from "../../../models/Show.js"
import Venue from "../../../models/Venue.js"

const venueShowsRouter = new express.Router({mergeParams: true})

venueShowsRouter.get("/", async (req, res) => {
    try{
        const shows = await Show.query()
        return res.status(200).json({shows})
    }catch(error){
        return res.status(500).json({errors: error})
    }
})

venueShowsRouter

export default venueShowsRouter