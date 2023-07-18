const express = require("express")
const { auth } = require("../middlewares/auth.middleware")
const { MarketInventoryModel } = require("../models/marketInventory.model")



const marketInventoryRoute = express.Router()

marketInventoryRoute.post("/add",auth,async(req,res)=>{
    try {
        const car = await MarketInventoryModel(req.body)   
        await car.save()
        res.status(200).json({msg:"New car has been added", car})
  } catch (error) {
      res.status(400).json({error:error.message})
  }
})

module.exports = {
    marketInventoryRoute
}