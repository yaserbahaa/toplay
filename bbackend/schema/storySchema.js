const mongoose =require("mongoose")






const storySchema = new mongoose.Schema({
    username:String,
    icon:String,
    storyImgUrl:String,
    storyVideoUrl:String,
    text:String,
    id:String,
},{timestamps:true})





module.exports = mongoose.model("story",storySchema)    