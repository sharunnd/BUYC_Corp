const express = require("express")
const { auth } = require("../middlewares/auth.middleware")
const { CarModel } = require("../models/cars.model")


const carsRouter = express.Router()

carsRouter.post("/add",auth,async(req,res)=>{
    try {
        const car = await CarModel(req.body)   
        await car.save()
        res.status(200).json({msg:"New car has been added", car})
  } catch (error) {
      res.status(400).json({error:error.message})
  }
})

module.exports = {
    carsRouter
}