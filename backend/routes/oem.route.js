const express = require("express")
const { OemModel } = require("../models/oem.model")

const oemRouter = express.Router()

oemRouter.post("/add", async(req,res)=>{
    try {
          const car = await OemModel(req.body)   
          await note.save()
        res.json({msg:"New car has been added", note})
    } catch (error) {
        res.json({error:error.message})
    }
})

module.exports = {
    oemRouter
}