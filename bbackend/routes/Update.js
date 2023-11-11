const express =require( 'express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const users =require('../schema/usersSchema.js')
const posts = require('../schema/postSchema')
const story = require('../schema/storySchema')
require('dotenv').config()




router.patch("/updateIcon",async(req,res)=>{
try{
    jwt.verify(req.cookies.token,process.env.SECRET_KEY,async function (err,decoded){
        if(err){
            console.log("user is not auth");
        }
        else{
            const data = await users.updateOne({_id:decoded.id},{icon:req.body.iconUrl})
            const postData = await posts.updateMany({id:decoded.id},{icon:req.body.iconUrl})
            const storyData = await story.updateMany({id:decoded.id},{icon:req.body.iconUrl})

        }
    })
}catch{
    console.log("could not update icon");
}

})

router.patch("/likeUpdate",async(req,res)=>{

    try{
        const dataFind = await posts.findOne({_id:req.body._id})
        if(req.body.unLike){
            const data = await posts.updateOne({_id:req.body._id},{like:dataFind.like = dataFind.like - 1})
            // console.log(data.like);
        }else if(req.body.like){
            const data = await posts.updateOne({_id:req.body._id},{like:dataFind.like = dataFind.like + 1})
            // console.log(data.like);
        }
        }
    catch{
        console.log("could not update like");
    }
    })



module.exports =router