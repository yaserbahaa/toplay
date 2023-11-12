const express =require( 'express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const friends = require('../schema/friendsSchema')
const users =require('../schema/usersSchema.js')
require('dotenv').config()




router.post("/addFriend",(req,res)=>{
    try{
        jwt.verify(req.cookies.token,process.env.SECRET_KEY,async function(err,decoded){
            if(err){
                console.log("user is not auth");
            }
            else if(req.body.idAdd == decoded.id){
                console.log("cant add your self XD");
            }
            else{
                const friend =await users.findOne({_id:req.body.idAdd})
                 const friendAdd = await friends.create({ownerId:decoded.id,ownerUsername:decoded.username,friendId:friend._id,friendUsername:friend.username,friendIcon:friend.icon})
                 console.log(friendAdd);
                 res.sendStatus(200)
            }
        })
    }catch(err){
        console.log(err);
    }
})














module.exports = router