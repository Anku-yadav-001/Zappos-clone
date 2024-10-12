const express = require("express");
const trandingModel = require("../models/tranding.model");
const checkAuth = require("../middlewares/auth.middleware");
const trandingRoute = express.Router()


trandingRoute.post("/add-trendings",async (req, res) => {
    const {img,title} = req.body;
    try {
       const trand = trandingModel({img,title})
        await trand.save();
        res.status(201).json({ message: "trending item successfully" }); 
    } catch (error) {
        res.status(400).json({
            message: "Failed to add trendings",
            err: error.message,
        });
    }
});

trandingRoute.get("/all-trendings",async (req, res) => {
    try {
       const trendings = await trandingModel.find()
       res.json({
        message:"list of all trandings",
        status:200,
        trendings
       })
    } catch (error) {
        res.status(400).json({
            message: "Failed to list all trendings",
            err: error.message,
        });
    }
});



module.exports = trandingRoute
