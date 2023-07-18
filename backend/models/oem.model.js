const mongoose = require("mongoose")

const oemSchema = mongoose.Schema({
    model: String,
    Year_of_Model: Number,
    price: Number,
    available_colors:Array,
    mileage:Number,
    Max_Speed:Number,
    Power:Number
},{
    versionKey: false
})

const OemModel = mongoose.model("OEM-spec",oemSchema)

module.exports = {
    OemModel
}