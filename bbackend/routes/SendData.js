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
    jwt.verify(req.cookies.token,"5e293fc51421ff6a5be51018adc2a166d33edb2bcf4e375a4f880d181d45b890d2ca850fa8e070ee0be185461727862608aaf9d609814d85922e9f4843168f68",async function (err,decoded){
            if(err){
                console.log("could not send data to client bec"+err);
                res.sendStatus(500)
            }
            else{
                const postData = await posts.find().sort({createdAt:-1})
                const storyData = await story.find().sort({createdAt:-1})
                const userData = await users.findOne({_id:decoded.id})
                res.json({posts:postData,stories:storyData,currentUsername:userData.username,currentIcon:userData.icon})
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
    jwt.verify(req.cookies.token,"5e293fc51421ff6a5be51018adc2a166d33edb2bcf4e375a4f880d181d45b890d2ca850fa8e070ee0be185461727862608aaf9d609814d85922e9f4843168f68",async function (err,decoded){
            if(err){
                console.log("could not send data to client bec bec user is not auth from data lol");
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
        jwt.verify(req.cookies.token,"5e293fc51421ff6a5be51018adc2a166d33edb2bcf4e375a4f880d181d45b890d2ca850fa8e070ee0be185461727862608aaf9d609814d85922e9f4843168f68",async function (err,decoded){
                if(err){
                    console.log("could not send data to client bec user is not auth from data Valorant");
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
            jwt.verify(req.cookies.token,"5e293fc51421ff6a5be51018adc2a166d33edb2bcf4e375a4f880d181d45b890d2ca850fa8e070ee0be185461727862608aaf9d609814d85922e9f4843168f68",async function (err,decoded){
                    if(err){
                        console.log("could not send data to client bec bec user is not auth from data csgo2");
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
                jwt.verify(req.cookies.token,"5e293fc51421ff6a5be51018adc2a166d33edb2bcf4e375a4f880d181d45b890d2ca850fa8e070ee0be185461727862608aaf9d609814d85922e9f4843168f68",async function (err,decoded){
                        if(err){
                            console.log("could not send data to client bec bec user is not auth from data warz");
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
    jwt.verify(req.cookies.token,"5e293fc51421ff6a5be51018adc2a166d33edb2bcf4e375a4f880d181d45b890d2ca850fa8e070ee0be185461727862608aaf9d609814d85922e9f4843168f68",async function(err,decoded){
        if(err){
            res.sendStatus(500)
            console.log("user is not authentcated from tokendata");
        }
        else{
            const data =await users.findOne({_id:decoded.id})
            const friendsData =await friends.find({ownerId:decoded.id}).sort({createdAt:-1})
            res.json({id:decoded.id,username:data.username,icon:data.icon,cover:data.cover,friendsData:friendsData})
        }
    })
})


router.get("/ownerProfileData", async(req,res)=>{
    jwt.verify(req.cookies.token,"5e293fc51421ff6a5be51018adc2a166d33edb2bcf4e375a4f880d181d45b890d2ca850fa8e070ee0be185461727862608aaf9d609814d85922e9f4843168f68",async function(err,decoded){
        if(err){
            res.sendStatus(500)
            console.log("user is not authentcated from ownerProfileData");
        }
        else{
            const postData =await posts.find({id:decoded.id}).sort({createdAt:-1})
            res.json(postData)         
        }
    })
})

router.get("/userProfile/id/:id", async(req,res)=>{
    try{
        const userData = await users.findOne({_id:req.params.id})
        const userPostsData = await posts.find({id:req.params.id}).sort({createdAt:-1})
        const userFriendsData = await friends.find({ownerId:req.params.id}).sort({createdAt:-1})
        res.json({userPostsData,userData,userFriendsData})
    }
    catch(err){
        console.log("something went wroung when trying to get user data" +err)
    }
})


router.get("/userFriends",(req,res)=>{
    jwt.verify(req.cookies.token,"5e293fc51421ff6a5be51018adc2a166d33edb2bcf4e375a4f880d181d45b890d2ca850fa8e070ee0be185461727862608aaf9d609814d85922e9f4843168f68",async function(err,decoded){
        if(err){
            console.log("user is not auth from userfriends");
        }
        else{
            const data = await friends.find({ownerId:decoded.id}).sort({createdAt:-1})
            res.json(data)
            console.log("friends data send it");
        }
    })
})






module.exports = router