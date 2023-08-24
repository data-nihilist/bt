import express from "express"
import Vibe from "../../../models/Vibe.js"
import Show from "../../../models/Show.js"
import Track from "../../../models/Track.js"

const vibesRouter = new express.Router()

vibesRouter.get("/", async (req, res) => {
    try {
        const playlists = await Vibe.query()
        return res.status(200).json({ playlists })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

vibesRouter.post("/", async (req, res) => {
    const { showTitle, trackTitle } = req.body
    const show = await Show.query().where({ title: showTitle })
    const track = await Track.query().where({ title: trackTitle })
    try {
        const newVibe = await Vibe.query().insertAndFetch({ showId: show[0].id, trackId: track[0].id })
        return res.status(201).json({ newVibe })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

export default vibesRouter