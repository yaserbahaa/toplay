const express =require( 'express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const posts =require('../schema/postSchema')
require('dotenv').config()




router.post("/data", (req,res)=>{
    try{
    jwt.verify(req.cookies.token,process.env.SECRET_KEY,async function (err,decoded){
            if(err){
                console.log("could not send data to client bec"+err);
                res.sendStatus(500)
            }
            else{
                const data = await posts.find().sort({createdAt:-1})
                console.log(data);
                // res.json({videoUrl:data.videoUrl,imgUrl:data.imgUrl,text:data.text,id:data.id,currentUsername:decoded.username,currentIcon:decoded.icon})
                // res.json({posts:data,currentUser:{username:decoded.username,icon:decoded.icon}})
                res.json({posts:data,currentUsername:decoded.username,currentIcon:decoded.icon})
            }
        })
    }
        catch(err){
            res.sendStatus(500)
            console.log("could not send data "+err);
        }
    })

router.post('/tokenData',(req,res)=>{
    jwt.verify(req.cookies.token,process.env.SECRET_KEY,async function(err,decoded){
        if(err){
            res.sendStatus(500)
            console.log("user is not authentcated");
        }
        else{
            res.json({id:decoded.id,username:decoded.username,icon:decoded.icon})
        }
    })
})










module.exports = router