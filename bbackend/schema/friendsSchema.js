const mongoose =require("mongoose")





const friendsSchema = new mongoose.Schema({
    friendUsername:String,
    ownerId:String,
    ownerUsername:String,
    friendIcon:String,
    friendId:String,
},{timestamps: true})






module.exports = mongoose.model("friends",friendsSchema)