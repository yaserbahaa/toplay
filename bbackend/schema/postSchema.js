const mongoose =require("mongoose")
require('mongoose-type-url');





const postSchema = new mongoose.Schema({
    imgUrl:String,
    videoUrl:String,
    text:String,
    id:String,
},{timestamps: true})






module.exports = mongoose.model("post",postSchema)