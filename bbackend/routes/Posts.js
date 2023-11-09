const express =require( 'express')
const router = express.Router()
const multer = require('multer');
const jwt = require('jsonwebtoken')
const posts = require('../schema/postSchema')




router.post('/storePost',async(req,res)=>{
    jwt.verify(req.cookies.token,process.env.SECRET_KEY,async function(err,decoded){
      try{
        if(err){
          res.sendStatus(500)
          console.log('user is not auth');
        }
        else if(req.body.imgUrl) {
          const data = await posts.create({imgUrl:req.body.imgUrl,text:req.body.text,id:decoded.id,username:decoded.username,icon:decoded.icon})
          console.log(data);
          res.json({imgUrl:req.body.imgUrl}) 
          console.log(req.body.imgUrl);
          console.log("img stored in db");
        }
        else if(req.body.videoUrl) {
          const data = await posts.create({videoUrl:req.body.videoUrl,text:req.body.text,id:decoded.id,username:decoded.username,icon:decoded.icon})
          res.json({data})
          console.log(data);
          console.log(req.body.videoUrl);
          console.log("video stored in db");
        }

      }catch(err){
        console.log("img or video url is not found")
        res.sendStatus(500)
      }
    })

})



module.exports = router