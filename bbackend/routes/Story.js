const express =require( 'express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const story = require('../schema/storySchema')
require('dotenv').config()




router.post("/storeStory",(req,res)=>{
    jwt.verify(req.cookies.token,process.env.SECRET_KEY,async function(err,decoded){
        if(err){
            console.log("user is not auth when trying to store his story");
        }
        else{
        try{
            if(req.body.storyImgUrl){
            const data =await story.create({storyImgUrl:req.body.storyImgUrl,text:req.body.text,id:decoded.id,username:decoded.username,icon:decoded.icon})
            console.log(data);
            }else if(req.body.storyVideoUrl){
                const data =await story.create({storyVideoUrl:req.body.storyVideoUrl,text:req.body.text,id:decoded.id,username:decoded.username,icon:decoded.icon})
                console.log(data);
            }
            else{console.log("cant find img url or video url");}
        }
        catch{
                console.log("something went worout when trying to store his story");
        }
        }
    })
})






module.exports= router