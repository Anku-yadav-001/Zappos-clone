const express = require("express");
const checkAuth = require("../middlewares/auth.middleware");
const atumnModel = require("../models/autumn.model");
const atumnRoute = express.Router()


atumnRoute.post("/add-atumn", async (req, res) => {
    const {img,title,lable} = req.body;
    try {
       const atumn = atumnModel({img,title,lable})
        await atumn.save();
        res.status(201).json({ message: "atumn item successfully" }); 
    } catch (error) {
        res.status(400).json({
            message: "Failed to add atunm",
            err: error.message,
        });
    }
});

atumnRoute.get("/all-atumns",async (req, res) => {
    try {
       const autumn = await atumnModel.find()
       res.json({
        message:"list of all trandings",
        status:200,
        autumn
       })
    } catch (error) {
        res.status(400).json({
            message: "Failed to list all atumn",
            err: error.message,
        });
    }
});



module.exports = atumnRoute
