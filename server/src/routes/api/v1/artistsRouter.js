import express from "express"
import Artist from "../../../models/Artist.js"
import User from "../../../models/User.js"
import uploadImage from "../../../db/services/uploadImage.js"

const artistsRouter = new express.Router()

artistsRouter.get("/", async (req, res) => {
    try {
        const artists = await Artist.query()
        return res.status(200).json({ artists })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

artistsRouter.get("/:id", async (req, res) => {
    try {
        const artistId = req.params.id
        const artist = await Artist.query().findById(artistId)
        return res.status(200).json({ artist })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

artistsRouter.post("/", uploadImage.single("image"), async (req, res) => {
    try{
        const body = req.body
        const data = {
            ...body,
            userId: req.user.id,
            image: req.file.location,
        }
        console.log(data)
        const newArtist = await Artist.query().insertAndFetch(data);
        return res.status(201).json({ newArtist })
    } catch (error) {
        return res.status(500).json({ errors: error })
    }
})

// artistsRouter.post("/", async (req, res) => {
//     const body = req.body;
//     const userId = req.user.id
//     try {
//         const user = await User.query().findById(userId)
//         const newArtist = await Artist.query().insertAndFetch(body, user.id)
//         return res.status(201).json({ newArtist })
//     } catch (error) {
//         return res.status(500).json({ errors: error })
//     }
// })

export default artistsRouter