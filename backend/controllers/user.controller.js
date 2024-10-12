const express = require("express")
const userModel = require("../models/user.model")
const userRoute = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const blacklistModel = require("../models/blacklist.model")
userRoute.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const isUserPresent = await userModel.findOne({ email });
        if (isUserPresent) {
            return res.status(409).json({ message: "User already exists" }); 
        }

        const hashedPassword = await bcrypt.hash(password, 10); 
        if (!hashedPassword) {
            return res.status(500).json({ message: "Failed to hash password" }); 
        }

        const user = new userModel({
            name,
            email,
            password: hashedPassword,
        });

        await user.save();
        res.status(201).json({ message: "User registered successfully" }); 
    } catch (error) {
        res.status(400).json({
            message: "Failed to register",
            err: error.message,
        });
    }
});


userRoute.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try {
        const isUserExist = await userModel.findOne({email})
        if(!isUserExist){
            return res.json({
                message:"user not exist please register first",
                status:404
            })
        }

        const checkPassword = await bcrypt.compare(password,isUserExist.password)
        if(!checkPassword){
            return res.json({
                message:"invalid password",
                status:403
            })
        }

        // const token = await jwt.sign({userId:isUserExist._id,email,role:isUserExist.role},JWT_SECRET_KEY,{expiresIn:'1h'})
        const accessToken =jwt.sign({userId:isUserExist._id,},process.env.JWT_SECRET_KEY,{expiresIn:'1h'})
        const refreshToken =jwt.sign({userId:isUserExist._id},process.env.JWT_SECRET_KEY,{expiresIn:'7d'})
        res.json({
            message:"user login successfully",
            status:200,
            accessToken,
            refreshToken,
            name:isUserExist.name
        })
    } catch (error) {
        res.json({
            message:"failed to login",
            status:400,
            err:error.message
        })
    }
})


userRoute.post("/logout",async(req,res)=>{
    try {
        const token = req.headers.authorization.split(" ")[1]
        if(!token){
            return res.send("please provide token")
        }
        const createBLT = blacklistModel({token})
        await createBLT.save()
        res.json({
            message:"user logout successfully",
            status:200
        })
    } catch (error) {
        res.json({
            message:"failed to logout user",
            status:500,
            err:error.message
        })
    }
})

module.exports  = userRoute