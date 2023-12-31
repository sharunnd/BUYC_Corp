const express = require("express");
const { connectDB } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { oemRouter } = require("./routes/oem.route");
const { marketInventoryRouter } = require("./routes/marketInventory.routes");
require("dotenv").config()
const cors = require("cors")


const app = express()
app.use(cors())
app.use(express.json())
app.use("/users",userRouter)
app.use("/oem",oemRouter)
app.use("/cars",marketInventoryRouter)
 
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