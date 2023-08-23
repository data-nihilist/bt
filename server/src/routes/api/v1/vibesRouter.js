import express from "express"
import Vibe from "../../../models/Vibe.js"

const vibesRouter = new express.Router()

vibesRouter.get("/", async (req, res) => {
    try{
        const playlists = await Vibe.query()
        return res.status(200).json({playlists})
    } catch(error) {
        return res.status(500).json({ errors: error })
    }
})

export default vibesRouter