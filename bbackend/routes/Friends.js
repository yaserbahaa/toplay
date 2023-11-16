const express =require( 'express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const friends = require('../schema/friendsSchema')
const users =require('../schema/usersSchema.js')
require('dotenv').config()




router.post("/addFriend", async(req,res)=>{
    jwt.verify(req.cookies.token,process.env.SECRET_KEY,async function(err,decoded){
        const friend =await users.findOne({_id:req.body.idAdd})
        const ownerFriends =await friends.find({ownerId:decoded.id})
        const friendsCheck = ownerFriends.map(friend=>{return friend.friendId})
        if(err){
                console.log("user is not auth");
            }
            else if(req.body.idAdd == decoded.id){
                console.log("cant add your self XD");
            }
            else if(friendsCheck.includes(req.body.idAdd)){
                console.log("friend already added");
            }
                else{
                    const friendAdd = await friends.create({ownerId:decoded.id,ownerUsername:decoded.username,friendId:friend._id,friendUsername:friend.username,friendIcon:friend.icon})
                    console.log("friend added successfully " +friendAdd);
                    res.sendStatus(200)
                }
            

    }
    )
})














module.exports = router