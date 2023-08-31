import express from "express"
import Show from "../../../models/Show.js"
import ShowSerializer from "../../../db/serializers/ShowSerializer.js"
import User from "../../../models/User.js"

const showsRouter = new express.Router()

showsRouter.get("/", async (req, res) => {
    const userId = req.user.id
    const user = await User.query().findById(userId)
    try {
        const shows = await Show.query().where({ hostId: userId })
        console.log(shows)
        const serializedShows = await ShowSerializer.summarize(shows)
        console.log(serializedShows)
        return res.status(200).json({ shows: serializedShows })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

showsRouter.get("/:id", async (req, res) => {
    const showId = req.params.id
    try {
        const show = await Show.query().findById(showId)
        show.tracks = await show.$relatedQuery("tracks")
        show.artists = await show.$relatedQuery("artists")
        show.users = await show.$relatedQuery("users")
        return res.status(200).json({ show })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

export default showsRouter