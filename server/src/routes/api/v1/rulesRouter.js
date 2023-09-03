import express from "express"
import Rule from "../../../models/Rule.js"

const rulesRouter = new express.Router()

rulesRouter.get("/", async (req, res) => {
    try{
        const rules = await Rule.query()
        return res.status(200).json({ rules })
    }catch(error){
        return res.status(500).json({ errors: error })
    }
})

export default rulesRouter