const mongoose = require("mongoose")

const atumnSchema = mongoose.Schema({
    img:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    lable:{
        type:String,
        required:true
    }
})

const atumnModel = mongoose.model("atumn",atumnSchema)

module.exports = atumnModel