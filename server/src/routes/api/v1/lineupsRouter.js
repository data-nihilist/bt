import express from "express"
import Lineup from "../../../models/Lineup.js"

const lineupsRouter = new express.Router()


lineupsRouter.get("/", async (req, res) => {
    try{
        const lineups = await Lineup.query()
        return res.status(200).json({lineups})
    }catch(error){
        return res.status(500).json({ errors: error })
    }
})

export default lineupsRouter