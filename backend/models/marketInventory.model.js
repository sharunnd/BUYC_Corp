const mongoose = require("mongoose")

const marketInventorySchema = mongoose.Schema({
    image: String,
    title: String,
    description:Array,
    price:Number,
    colors:Array,
    mileage:Number,
    userID: String,
    kilometers: Number,
    major_scratches: Number,
    original_paint: String,
    number_of_accidents:Number,
    previous_buyers:Number,
    registration_place:String,
    carID:String
},{
    versionKey: false
})

const MarketInventoryModel = mongoose.model("car",marketInventorySchema)

module.exports = {
    MarketInventoryModel
}