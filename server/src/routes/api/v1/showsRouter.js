import express from "express"
import Show from "../../../models/Show.js"

const showsRouter = new express.Router()

showsRouter.get("/", async (req, res) => {
    try{
        const shows = await Show.query()
        return res.status(200).json({ shows })
    }catch(error){
        return res.status(500).json({ errors: error })
    }
})

showsRouter.get("/:id", async (req, res) => {
    const showId = req.params.id
    try{
        const show = await Show.query().findById(showId)
        show.tracks = await show.$relatedQuery("tracks")
        return res.status(200).json({ show })
    } catch(error) {
        return res.status(500).json({ errors: error })
    }
})

export default showsRouter