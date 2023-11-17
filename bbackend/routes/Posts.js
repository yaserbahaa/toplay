const express =require( 'express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const posts = require('../schema/postSchema')
const users =require('../schema/usersSchema.js')

require('dotenv').config()




router.post('/storePost',async(req,res)=>{
    jwt.verify(req.cookies.token,process.env.SECRET_KEY,async function(err,decoded){
      try{
        if(err){
          res.sendStatus(500)
          console.log('user is not auth');
        }
        else if(req.body.imgUrl) {
          const userData = await users.findOne({_id:decoded.id})
          const data = await posts.create({imgUrl:req.body.imgUrl,text:req.body.text,like:0,comment:0,game:req.body.game,id:decoded.id,username:userData.username,icon:userData.icon})
          console.log(data);
          console.log("img stored in db");
        }
        else if(req.body.videoUrl) {
          const userData = await users.findOne({_id:decoded.id})
          const data = await posts.create({videoUrl:req.body.videoUrl,text:req.body.text,like:0,comment:0,game:req.body.game,id:decoded.id,username:userData.username,icon:userData.icon})
          console.log(data);
          console.log("video stored in db");
        }

      }catch(err){
        console.log("img or video url is not found")
        res.sendStatus(500)
      }
    })

})



module.exports = router