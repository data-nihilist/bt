import express from "express"
import Announcement from "../../../models/Announcement.js"

const announcementsRouter = new express.Router()

announcementsRouter.get("/", async (req, res) => {
    try{
        const announcements = await Announcement.query()
        return res.status(200).json({ announcements })
    }catch(error){
        return res.status(500).json({ errors: error })
    }
})

export default announcementsRouter