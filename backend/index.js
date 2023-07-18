const express = require("express");
const { connectDB } = require("./db");
require("dotenv").config()



const app = express()

app.use(express.json())


 
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