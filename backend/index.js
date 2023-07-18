const express = require("express");
const { connectDB } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { oemRouter } = require("./routes/oem.route");
const { marketInventoryRoute } = require("./routes/marketInventory.routes");
require("dotenv").config()



const app = express()

app.use(express.json())
app.use("/users",userRouter)
app.use("/oem",oemRouter)
app.use("/cars",marketInventoryRoute)
 
connectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        try {
            console.log(`Server running at port ${process.env.PORT}`);
        } catch (error) {
            console.log(error);
            console.log("Something went wrong");
        }
    })
})