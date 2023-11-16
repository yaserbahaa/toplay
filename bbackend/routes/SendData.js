const express =require( 'express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const posts =require('../schema/postSchema')
const users =require('../schema/usersSchema.js')
const story = require('../schema/storySchema')
const friends = require('../schema/friendsSchema')
require('dotenv').config()




router.get("/data", (req,res)=>{
    try{
    jwt.verify(req.cookies.token,process.env.SECRET_KEY,async function (err,decoded){
            if(err){
                console.log("could not send data to client bec"+err);
                res.sendStatus(500)
            }
            else{
                const postData = await posts.find().sort({createdAt:-1})
                const storyData = await story.find().sort({createdAt:-1})
                res.json({posts:postData,stories:storyData,currentUsername:decoded.username,currentIcon:decoded.icon})
            }
        })
    }
        catch(err){
            res.sendStatus(500)
            console.log("could not send data "+err);
        }
    })
router.get("/dataLol", (req,res)=>{
    try{
    jwt.verify(req.cookies.token,process.env.SECRET_KEY,async function (err,decoded){
            if(err){
                console.log("could not send data to client bec"+err);
                res.sendStatus(500)
            }
            else{
                const postData = await posts.find({game:"lol"}).sort({createdAt:-1})
                res.json({posts:postData,currentUsername:decoded.username,currentIcon:decoded.icon})
            }
        })
    }
        catch(err){
            res.sendStatus(500)
            console.log("could not send data "+err);
        }
    })
    router.get("/dataValorant", (req,res)=>{
        try{
        jwt.verify(req.cookies.token,process.env.SECRET_KEY,async function (err,decoded){
                if(err){
                    console.log("could not send data to client bec"+err);
                    res.sendStatus(500)
                }
                else{
                    const postData = await posts.find({game:"valorant"}).sort({createdAt:-1})
                    res.json({posts:postData,currentUsername:decoded.username,currentIcon:decoded.icon})
                }
            })
        }
            catch(err){
                res.sendStatus(500)
                console.log("could not send data "+err);
            }
        })
        router.get("/dataCsgo2", (req,res)=>{
            try{
            jwt.verify(req.cookies.token,process.env.SECRET_KEY,async function (err,decoded){
                    if(err){
                        console.log("could not send data to client bec"+err);
                        res.sendStatus(500)
                    }
                    else{
                        const postData = await posts.find({game:"csgo2"}).sort({createdAt:-1})
                        res.json({posts:postData,currentUsername:decoded.username,currentIcon:decoded.icon})
                    }
                })
            }
                catch(err){
                    res.sendStatus(500)
                    console.log("could not send data "+err);
                }
            })
            router.get("/dataWarz", (req,res)=>{
                try{
                jwt.verify(req.cookies.token,process.env.SECRET_KEY,async function (err,decoded){
                        if(err){
                            console.log("could not send data to client bec"+err);
                            res.sendStatus(500)
                        }
                        else{
                            const postData = await posts.find({game:"warz"}).sort({createdAt:-1})
                            res.json({posts:postData,currentUsername:decoded.username,currentIcon:decoded.icon})
                        }
                    })
                }
                    catch(err){
                        res.sendStatus(500)
                        console.log("could not send data "+err);
                    }
                })

router.get('/tokenData',async(req,res)=>{
    jwt.verify(req.cookies.token,process.env.SECRET_KEY,async function(err,decoded){
        if(err){
            res.sendStatus(500)
            console.log("user is not authentcated");
        }
        else{
            const data =await users.findOne({_id:decoded.id})
            res.json({id:decoded.id,username:data.username,icon:data.icon})
        }
    })
})

router.get("/userProfile/id/:id", async(req,res)=>{
    try{
        const userData = await users.findOne({_id:req.params.id})
        const userPostsData = await posts.find({id:req.params.id})
        const userFriendsData = await friends.find({ownerId:req.params.id})
        res.json({userPostsData,userData,userFriendsData})
    }
    catch(err){
        console.log("something went wroung when trying to get user data" +err)
    }
})


router.get("/userFriends",(req,res)=>{
    jwt.verify(req.cookies.token,process.env.SECRET_KEY,async function(err,decoded){
        if(err){
            console.log("user is not auth");
        }
        else{
            const data = await friends.find({ownerId:decoded.id})
            res.json(data)
            console.log("friends data send it");
        }
    })
})






module.exports = router