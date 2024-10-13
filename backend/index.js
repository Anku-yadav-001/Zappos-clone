const express = require("express")
const dotenv = require("dotenv").config()
const connection = require("./dbconfig/db")
const userRoute = require("./controllers/user.controller")
const PORT = process.env.PORT
const server = express()
const cors = require("cors")
const trandingRoute = require("./controllers/tranding.controller")
const atumnRoute = require("./controllers/autumn.controller")
const insparationRoute = require("./controllers/inspiration.controller")
const productRoute = require("./controllers/products.controller")
const exclusiveRoute = require("./controllers/exclusive.controller")
const shopRoute = require("./controllers/shop.controller")

server.use(cors())
server.use(express.json())

server.get("/",(req,res)=>{
    res.send("server is working fine")
})

server.use("/auth",userRoute)
server.use("/trend",trandingRoute)
server.use("/autumn",atumnRoute)
server.use("/inspiration",insparationRoute)
server.use("/product",productRoute)
server.use("/exclusive",exclusiveRoute)
server.use("/shop",shopRoute)

server.listen(PORT,async()=>{
    try {
        await connection
        console.log("connected to database")
        console.log(`server is running on port ${PORT}`)
    } catch (error) {
        console.log(`error occured - ${error}`)
    }
})