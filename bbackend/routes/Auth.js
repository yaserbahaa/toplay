const express =require( 'express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const users =require('../schema/usersSchema.js')
require('dotenv').config()
const bcrypt =require("bcrypt")




router.post('/signup',async (req,res)=>{
    try{
        if(users.username !== req.body.username){
            const salt = await bcrypt.genSalt(10)    
            const hash = await bcrypt.hash(req.body.password,salt)
            const userss = await users.create({username:req.body.username,password:hash,icon:req.body.icon,cover:req.body.cover})
            res.json(userss)
            console.log(userss)
            console.log('user created');
        }
        else {
            console.log('user exist');
            res.sendStatus(500)
        }
    }
    catch{
        res.sendStatus(500)
        console.log('something went wroung');

    }
})

router.post('/login',async (req,res)=>{
    try{
            const username = req.body.username
            const password = req.body.password
            const data = await users.findOne({username:username})
                bcrypt.compare(req.body.password, data.password, function(err, succses) {
                if (err){
                    console.log(err);
                }
                else if (succses) {
                const token = jwt.sign({id:data._id,username:data.username,icon:data.icon,cover:data.cover},"5e293fc51421ff6a5be51018adc2a166d33edb2bcf4e375a4f880d181d45b890d2ca850fa8e070ee0be185461727862608aaf9d609814d85922e9f4843168f68",{expiresIn: 1000*60*60*24*7*4*360})  
                res.cookie("token",token,{httpOnly:true,sameSite:'none',secure:true,maxAge:1000*60*60*24*7*4*360})
                console.log('password and username match in db!');
                res.sendStatus(200)
            }else {
                //   return response.json({success: false, message: 'passwords do not match'});
                console.log('password is wrong');
                res.sendStatus(500)
            }
        });
    }
    catch{
        res.sendStatus(500)
        console.log('username is wroung');

    }
})



router.post('/checkAuth',(req,res)=>{
    jwt.verify(req.cookies.token,"5e293fc51421ff6a5be51018adc2a166d33edb2bcf4e375a4f880d181d45b890d2ca850fa8e070ee0be185461727862608aaf9d609814d85922e9f4843168f68",function(err,decoded){
        if(err){
            res.sendStatus(500)
            console.log("user is not authentcated");
        }
        else{
            res.sendStatus(200)
            console.log("user is authentcated from checkAuth");
        }
    })
})


router.post('/refreshToken',(req,res)=>{
    jwt.verify(req.cookies.token,"5e293fc51421ff6a5be51018adc2a166d33edb2bcf4e375a4f880d181d45b890d2ca850fa8e070ee0be185461727862608aaf9d609814d85922e9f4843168f68",async function(err,decoded){
        if(err){
            res.sendStatus(500)
            console.log("user is not authentcated from refresh Token");
        }
        else{
            const userData = await users.findOne({_id:decoded.id})
            const token = jwt.sign({id:userData.id,username:userData.username,icon:userData.icon,cover:userData.cover},"5e293fc51421ff6a5be51018adc2a166d33edb2bcf4e375a4f880d181d45b890d2ca850fa8e070ee0be185461727862608aaf9d609814d85922e9f4843168f68",{expiresIn:1000*60*60*24*7*4*360})
            res.cookie("token",token,{httpOnly:true,sameSite:'none',secure:true,maxAge:1000*60*60*24*7*4*360})
        }
    })
})



router.post("/logout",(req,res)=>{
        // res.clearCookie("token")
        jwt.verify(req.cookies.token,"5e293fc51421ff6a5be51018adc2a166d33edb2bcf4e375a4f880d181d45b890d2ca850fa8e070ee0be185461727862608aaf9d609814d85922e9f4843168f68",async function(err,decoded){
            if(err){
                res.sendStatus(500)
                console.log("user is not authentcated from logout");
            }
            else{
                const userData = await users.findOne({_id:decoded.id})
                const token = jwt.sign({id:userData.id,username:userData.username,icon:userData.icon,cover:userData.cover},"5e293fc51421ff6a5be51018adc2a166d33edb2bcf4e375a4f880d181d45b890d2ca850fa8e070ee0be185461727862608aaf9d609814d85922e9f4843168f68",{expiresIn:0})
                res.cookie("token",token,{httpOnly:true,sameSite:'none',secure:true,expires: new Date(Date.now() - 86400000)})
                res.sendStatus(200)
            }
        })
    })
    

module.exports = router