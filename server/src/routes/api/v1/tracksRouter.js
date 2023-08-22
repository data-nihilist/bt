import express from "express"
import Track from "../../../models/Track.js"

const tracksRouter = new express.Router()

tracksRouter.post("/", async (req, res) => {
    console.log(req.body)
    try{
        
    }catch(error){
        return res.status(500).json({ errors: error })
    }
})

tracksRouter.get("/", async (req, res) => {
    try{
        const tracks = await Track.query()
        return res.status(200).json({ tracks })
    }catch(error){
        return res.status(500).json({ errors: error })
    }
})

export default tracksRouter