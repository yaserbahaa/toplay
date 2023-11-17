const express =require( 'express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const users =require('../schema/usersSchema.js')
const posts = require('../schema/postSchema')
const story = require('../schema/storySchema')
const friends = require('../schema/friendsSchema')

require('dotenv').config()




router.patch("/updateIcon",async(req,res)=>{
try{
    jwt.verify(req.cookies.token,process.env.SECRET_KEY,async function (err,decoded){
        if(err){
            console.log("user is not auth");
        }
        else{
            await users.updateOne({_id:decoded.id},{icon:req.body.iconUrl})
            await posts.updateMany({id:decoded.id},{icon:req.body.iconUrl})
            await story.updateMany({id:decoded.id},{icon:req.body.iconUrl})
            await friends.updateMany({friendId:decoded.id},{friendIcon:req.body.iconUrl})

        }
    })
}catch{
    console.log("could not update icon");
}
})
router.patch("/updateCover",async(req,res)=>{
    try{
        jwt.verify(req.cookies.token,process.env.SECRET_KEY,async function (err,decoded){
            if(err){
                console.log("user is not auth");
            }
            else{
                const data = await users.updateOne({_id:decoded.id},{cover:req.body.coverUrl})
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