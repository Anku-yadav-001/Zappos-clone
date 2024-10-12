const express = require("express");
const inspirationModel = require("../models/insparation.model");
const checkAuth = require("../middlewares/auth.middleware");
const insparationRoute = express.Router()


insparationRoute.post("/add-inspriation",async (req, res) => {
    const {img,title,lable} = req.body;
    try {
       const insp = inspirationModel({img,title,lable})
        await insp.save();
        res.status(201).json({ message: "inspriation item successfully" }); 
    } catch (error) {
        res.status(400).json({
            message: "Failed to add inspiration",
            err: error.message,
        });
    }
});

insparationRoute.get("/all-inspirations",async (req, res) => {
    try {
       const inspiration = await inspirationModel.find()
       res.json({
        message:"list of all inspiration",
        status:200,
        inspiration
       })
    } catch (error) {
        res.status(400).json({
            message: "Failed to list all inspiration",
            err: error.message,
        });
    }
});



module.exports = insparationRoute
