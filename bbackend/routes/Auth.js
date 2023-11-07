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
            const userss = await users.create({username:req.body.username,password:hash})
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
                const token = jwt.sign({id:data._id},process.env.SECRET_KEY,{expiresIn: 1000*60*60*24*7*4*360})  
                res.cookie("token",token,{httpOnly:true,secure:false,maxAge:1000*60*60*24*7*4*360})
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
    jwt.verify(req.cookies.token,process.env.SECRET_KEY,function(err,decoded){
        if(err){
            res.sendStatus(500)
            console.log("user is not authentcated");
        }
        else{
            res.sendStatus(200)
            console.log("user is authentcated from home");
        }
    })
})


router.post('/refreshToken',(req,res)=>{
    jwt.verify(req.cookies.token,process.env.SECRET_KEY,async function(err,decoded){
        if(err){
            res.sendStatus(500)
            console.log("user is not authentcated");
        }
        else{
            const token = jwt.sign({id:decoded.id},process.env.SECRET_KEY,{expiresIn:1000*60*60*24*7*4*360})
            res.cookie("token",token,{httpOnly:true,secure:false,maxAge:1000*60*60*24*7*4*360})
            res.sendStatus(200)
            console.log("thats his new token "+token);
        }
    })
})



router.post("/logout",(req,res)=>{
        res.clearCookie("token")
        res.sendStatus(200)
})


module.exports = router