const mongoose = require("mongoose")

const inspirationSchema = mongoose.Schema({
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

const inspirationModel = mongoose.model("inspiration",inspirationSchema)

module.exports = inspirationModel