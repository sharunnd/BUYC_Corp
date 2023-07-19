const express = require("express")
const { OemModel } = require("../models/oem.model")

const oemRouter = express.Router()

oemRouter.get("/", async(req,res)=>{
    const {query} = req.query
    let queryObj = {};
    try {
        
        if (query) {
            // Check if the query contains a year (4 digits)
            const yearRegex = /\b\d{4}\b/;
            const yearMatch = query.match(yearRegex);
      
            if (yearMatch) {
              // Extract the year from the query
              const year = Number(yearMatch[0]);
      
              // Remove the year from the query string
              const modelQuery = query.replace(yearRegex, '').trim();
      
              // Search for "model" and "Year_of_Model" fields with case-insensitive regex
              queryObj.$and = [
                { model: { $regex: modelQuery, $options: 'i' } },
                { Year_of_Model: year },
              ];
            } else {
              // Search only for "model" field with case-insensitive regex
              queryObj.model = { $regex: query, $options: 'i' };
            }
          }
          const oem = await OemModel.find(queryObj)   
          res.status(200).json({msg:"OEM Specifications", oem})
    } catch (err) {
        res.status(400).json({error:err.message})
    }
})

module.exports = {
    oemRouter
}