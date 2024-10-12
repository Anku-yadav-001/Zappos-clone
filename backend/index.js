const express = require("express")
const dotenv = require("dotenv").config()
const connection = require("./dbconfig/db")
const userRoute = require("./controllers/user.controller")
const PORT = process.env.PORT
const server = express()

server.use(express.json())

server.get("/",(req,res)=>{
    res.send("server is workign fine")
})

server.use("/auth",userRoute)

server.listen(PORT,async()=>{
    try {
        await connection
        console.log("connected to database")
        console.log(`server is running on port ${PORT}`)
    } catch (error) {
        console.log(`error occured - ${error}`)
    }
})