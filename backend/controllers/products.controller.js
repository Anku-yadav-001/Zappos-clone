const express = require("express");
const productModel = require("../models/products.model");
const productRoute = express.Router()


productRoute.post("/add-product",async (req, res) => {
    try {
       const product = productModel(req.body)
        await product.save();
        res.status(201).json({ message: "product item successfully" }); 
    } catch (error) {
        res.status(400).json({
            message: "Failed to add product",
            err: error.message,
        });
    }
});

productRoute.get("/all-products",async (req, res) => {
    try {
       const products = await productModel.find()
       res.json({
        message:"list of all products",
        status:200,
        products
       })
    } catch (error) {
        res.status(400).json({
            message: "Failed to list all products",
            err: error.message,
        });
    }
});



module.exports = productRoute
