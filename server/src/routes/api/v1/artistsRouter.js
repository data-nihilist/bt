import express from "express"
import Artist from "../../../models/Artist.js"

const artistsRouter = new express.Router()

artistsRouter.get("/", async (req, res) => {
    try{
        const artists = await Artist.query()
        return res.status(200).json({ artists })
    }catch(error){
        return res.status(500).json({ errors: error })
    }
})

artistsRouter.get("/:id", async (req, res) => {
    try{
        const artistId = req.params.id
        const artist = await Artist.query().findById(artistId)
        return res.status(200).json({artist})
    }catch(error){
        return res.status(500).json({ errors: error })
    }
})

export default artistsRouter