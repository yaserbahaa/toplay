const express =require( 'express')
const mongoose =require( 'mongoose')
const cors = require('cors')
const auth =require('./routes/Auth')
const sendData =require('./routes/SendData')
const cookieParser = require("cookie-parser")
const jwt = require('jsonwebtoken')
require('dotenv').config()

//vars
const app = express()
const port = 3000
const afrontend = 'http://localhost:5173'


//middleware
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:afrontend,
    credentials:true, 
}))
app.use(cookieParser())


//connect database
mongoose.connect(process.env.MONGODB_URL)
.then(result =>{
    console.log("database is runnig")
})
.catch(err =>{
    console.log("database cant run");
})

app.get('/',(req,res,next)=>{
    res.send('home')

})


//middleware Routes
app.use(auth)
app.use(sendData)







app.listen(port, () => {
    console.log('server is runnig at '+port)
})





