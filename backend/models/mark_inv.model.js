const mongoose = require("mongoose")

const marketInventorySchema = mongoose.Schema({
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

const OemModel = mongoose.model("mark-inv",marketInventorySchema)

module.exports = {
    marketInventorySchema
}