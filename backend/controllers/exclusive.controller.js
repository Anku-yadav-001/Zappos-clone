const express = require("express");
const exclusiveModel = require("../models/exclusive.model");
const exclusiveRoute = express.Router()


exclusiveRoute.post("/add-exclusive",async (req, res) => {
    try {
       const exclusive = exclusiveModel(req.body)
        await exclusive.save();
        res.status(201).json({ message: "product item exclusive" }); 
    } catch (error) {
        res.status(400).json({
            message: "Failed to add exclusive",
            err: error.message,
        });
    }
});

exclusiveRoute.get("/all-exclusives",async (req, res) => {
    try {
       const exclusives = await exclusiveModel.find()
       res.json({
        message:"list of all exclusives",
        status:200,
        exclusives
       })
    } catch (error) {
        res.status(400).json({
            message: "Failed to list all exclusives",
            err: error.message,
        });
    }
});



module.exports = exclusiveRoute
