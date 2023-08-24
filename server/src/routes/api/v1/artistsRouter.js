import express from "express"
import Artist from "../../../models/Artist.js"

const artistsRouter = new express.Router()

artistsRouter.get("/", async (req, res) => {
    console.log(req)
    try{
        const artists = await Artist.query()
        return res.status(200).json({ artists })
    }catch(error){
        return res.status(500).json({ errors: error })
    }
})

artistsRouter.get("/:id", async (req, res) => {
    console.log(req.body)
    try{

    }catch(error){
        return res.status(500).json({ errors: error })
    }
})

export default artistsRouter