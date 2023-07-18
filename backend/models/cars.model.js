const mongoose = require("mongoose")

const carSchema = mongoose.Schema({
    image: String,
    title: String,
    description:Array,
    price:Number,
    colors:Array,
    mileage:Number
},{
    versionKey: false
})

const CarModel = mongoose.model("car",carSchema)

module.exports = {
    CarModel
}