const express = require("express")
const { auth } = require("../middlewares/auth.middleware")
const { MarketInventoryModel } = require("../models/marketInventory.model")



const marketInventoryRouter = express.Router()

//for adding car details
marketInventoryRouter.post("/add",auth,async(req,res)=>{
    try {
        const car = await MarketInventoryModel(req.body)   
        await car.save()
        res.status(200).json({msg:"New car has been added", car})
  } catch (error) {
      res.status(400).json({error:error.message})
  }
})


marketInventoryRouter.get("/", async(req,res)=>{
    const {query,color,minPrice,maxPrice,limit,page} = req.query

    let queryObj = {};
    let skip = {}
    try {
      if(query){
        queryObj.title = {$regex: query, $options: "i"};
      }
      if(color){
        queryObj.color = color
    }
    if(minPrice){
        queryObj.price = {$gte:minPrice}
    }
    if(maxPrice){
        queryObj.price = {$lte:maxPrice}
    }
    if(minPrice && maxPrice){
        queryObj.$and = [{price: {$lt :maxPrice}}, {price :{$gt: minPrice}}]
    }

    if(page){
            
        skip = limit * ( page - 1)

    }
      const car = await MarketInventoryModel.find(queryObj).sort().limit(limit).skip(skip)
      console.log(query);   
      res.status(200).json({msg:"Details of cars", cars:car})
  } catch (err) {
      res.status(400).json({error:err.message})
  }
})


//for updating car details
marketInventoryRouter.patch("/update/:carID",auth, async(req,res)=>{

    const userIDinUserDoc = req.body.userID;
    const {carID} = req.params;
    try {
        const car = await MarketInventoryModel.findOne({_id:carID})
        const userIDinCarsDoc = car.userID;
    if(userIDinUserDoc === userIDinCarsDoc){
        await MarketInventoryModel.findByIdAndUpdate({_id:carID},req.body)
        res.status(200).json({msg:`Car details has been updated`})
    }else{
      res.status(400).json({msg:"Not Authorized"})
    }
    } catch (err) {
      res.status(400).json({error:err.message})
    }
})


//for deleting the car details
marketInventoryRouter.delete("/delete/:carID",auth, async(req,res)=>{
    const userIDinUserDoc = req.body.userID;
    const {carID} = req.params;
    try {
        const car = await MarketInventoryModel.findOne({_id:carID})
        const userIDinCarDoc = car.userID;
    if(userIDinUserDoc === userIDinCarDoc){
        await MarketInventoryModel.findByIdAndDelete({_id:carID})
        res.status(200).json({msg:`Car details has been deleted`})
    }else{
      res.status(400).json({msg:"Not Authorized"})
    }
    } catch (err) {
      res.status(400).json({error:err.message})
    }
})


module.exports = {
    marketInventoryRouter
}