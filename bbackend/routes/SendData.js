const express =require( 'express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const users =require('../schema/usersSchema.js')
require('dotenv').config()




router.get("/userData", (req,res)=>{
    try{
    jwt.verify(req.cookies.token,process.env.SECRET_KEY,async function (err,encoded){
            if(err){
                console.log("could not send data to client bec"+err);
                res.sendStatus(500)
            }
            else{
                const data = await users.findOne({_id:encoded.id})
                res.json({data,passwordNoHashd:encoded.password})
            }
        })
    }
        catch{
            res.sendStatus(500)
        }
    })











module.exports = router