const mongoose = require("mongoose")


const trandingSchema = mongoose.Schema({
    img:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        unique:true
    }
})

const trandingModel = mongoose.model("Tranding",trandingSchema)

module.exports = trandingModel