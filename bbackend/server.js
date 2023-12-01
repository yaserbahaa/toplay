const express =require( 'express')
const mongoose =require( 'mongoose')
const cors = require('cors')
const cookieParser = require("cookie-parser")
const jwt = require('jsonwebtoken')
require('dotenv').config()



//routes require
const auth =require('./routes/Auth')
const sendData =require('./routes/SendData')
const post = require('./routes/Posts')
const story = require('./routes/Story')
const update = require("./routes/Update")
const friends = require("./routes/Friends")

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
    console.log("database cant run ");
})



//middleware Routes
app.use(auth)
app.use(sendData)
app.use(post)
app.use(story)
app.use(update)
app.use(friends)








app.listen(port, () => {
    console.log('server is runnig at '+port)
})





