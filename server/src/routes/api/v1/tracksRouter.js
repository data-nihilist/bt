import express from "express"
import Track from "../../../models/Track.js"

const tracksRouter = new express.Router()

tracksRouter.post("/", async (req, res) => {
    const { artist, title, uri, albumUrl } = req.body
    const userId = req.user.id
    try {
        const persistedTrack = await Track.query().insertAndFetch({ artist, title, uri, albumUrl, userId })
        return res.status(201).json({ persistedTrack })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

tracksRouter.get("/", async (req, res) => {
    try {
        const tracks = await Track.query()
        return res.status(200).json({ tracks })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

export default tracksRouter