const express =require( 'express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const friends = require('../schema/friendsSchema')
const users =require('../schema/usersSchema.js')
require('dotenv').config()




router.post("/addFriend", async(req,res)=>{
    jwt.verify(req.cookies.token,"5e293fc51421ff6a5be51018adc2a166d33edb2bcf4e375a4f880d181d45b890d2ca850fa8e070ee0be185461727862608aaf9d609814d85922e9f4843168f68",async function(err,decoded){
        const friend =await users.findOne({_id:req.body.idAdd})
        const ownerFriends =await friends.find({ownerId:decoded.id})
        const friendsCheck = ownerFriends.map(friend=>{return friend.friendId})
        if(err){
                console.log("user is not auth when trying to addfriend");
            }
            else if(req.body.idAdd == decoded.id){
                console.log("cant add your self XD");
            }
            else if(friendsCheck.includes(req.body.idAdd)){
                console.log("friend already added");
            }
                else{
                    const userData = await users.findOne({_id:decoded.id})
                    const friendAdd = await friends.create({ownerId:decoded.id,ownerUsername:userData.username,friendId:friend._id,friendUsername:friend.username,friendIcon:friend.icon})
                    console.log("friend added successfully " +friendAdd);
                    res.sendStatus(200)
                }
            

    }
    )
})














module.exports = router