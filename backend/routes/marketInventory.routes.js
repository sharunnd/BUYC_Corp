const express = require("express")
const { auth } = require("../middlewares/auth.middleware")
const { MarketInventoryModel } = require("../models/marketInventory.model")
const {cloudinary} = require("../utils/cloudinary")


const marketInventoryRouter = express.Router()

//for adding car details
marketInventoryRouter.post("/add",auth,async(req,res)=>{
    const {image} = req.body
    try {
        const result = await cloudinary.uploader.upload(image, { 
            folder: "buycars",
            // width: 300,
            // crop: "scale"
        })
        const car = new MarketInventoryModel({...req.body,image:result.secure_url})   
        await car.save()
        res.status(200).json({msg:"New car details has been added", car})
  } catch (error) {
    console.log(error.message);
      res.status(400).json({error:error.message})
  }
})


marketInventoryRouter.get("/", async(req,res)=>{
    const {query,color,minPrice,maxPrice,limit,page,minMileage,maxMileage} = req.query

    let queryObj = {};
    let skip = {}
    try {
      if(query){
        queryObj.title = {$regex: query, $options: "i"};
      }
      if(color){
        queryObj.color = {$regex: color, $options: "i"}
    }
    if(minMileage){
      queryObj.mileage =  {$gte:minMileage};
    }
    if(maxMileage){
      queryObj.mileage =  {$lte:maxMileage};
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
      res.status(400).json({msg:"You are not authorized!"})
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
        res.status(400).json({msg:"You are not authorized!"})
    }
    } catch (err) {
      res.status(400).json({error:err.message})
    }
})

 
module.exports = {
    marketInventoryRouter
}