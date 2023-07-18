const express = require("express");
const userRouter = express.Router()
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/user.model");


// Registration/signup route
userRouter.post("/signup",async(req,res)=>{
    const { email, name, password, city } = req.body;
    try {
        const user = await UserModel.findOne({email})
        if(user){
            res.status(400).json({msg:"User already exists!"})
        }else{
            bcrypt.hash(password, 5, async(err, hash)=> {
                if(err){
                    res.status(400).json({error:err.message})
                }else{
                    const user =new UserModel({name,email,password:hash,city})
                    await user.save()
                    res.status(200).json({msg:"Registration succesful",user:req.body})
                }
            });
        }
        
    } catch (err) {
        res.status(400).json({error:err.message})
    }
})



module.exports = {
    userRouter
}