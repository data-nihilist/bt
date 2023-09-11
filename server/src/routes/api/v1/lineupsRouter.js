import express from "express"
import Lineup from "../../../models/Lineup.js"
import Artist from "../../../models/Artist.js"
import Show from "../../../models/Show.js"

const lineupsRouter = new express.Router()


lineupsRouter.get("/", async (req, res) => {
    try {
        const lineups = await Lineup.query()
        return res.status(200).json({ lineups })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

lineupsRouter.post("/", async (req, res) => {
    const { showTitle, artistName } = req.body
    const show = await Show.query().where({ title: showTitle })
    const artist = await Artist.query().where({ name: artistName })
    try {
        const newLineup = await Lineup.query().insertAndFetch({ showId: show[0].id, artistId: artist[0].id })
        return res.status(201).json({ newLineup })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

export default lineupsRouter