const mongoose =require("mongoose")
require('mongoose-type-url');





const postSchema = new mongoose.Schema({
    username:String,
    icon:String,
    imgUrl:String,
    videoUrl:String,
    text:String,
    id:String,
    like:Number,
    comment:String,
    game:String
},{timestamps: true})






module.exports = mongoose.model("post",postSchema)