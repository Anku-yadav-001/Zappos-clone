const express = require("express");
const shopModel = require("../models/shop.model");
const shopRoute = express.Router()


shopRoute.post("/add-shop",async (req, res) => {
    try {
       const shop = shopModel(req.body)
        await shop.save();
        res.status(201).json({ message: "shop item successfully" }); 
    } catch (error) {
        res.status(400).json({
            message: "Failed to add shop",
            err: error.message,
        });
    }
});

shopRoute.get("/all-shops",async (req, res) => {
    try {
       const shops = await shopModel.find()
       res.json({
        message:"list of all shops",
        status:200,
        shops
       })
    } catch (error) {
        res.status(400).json({
            message: "Failed to list all shops",
            err: error.message,
        });
    }
});



module.exports = shopRoute
