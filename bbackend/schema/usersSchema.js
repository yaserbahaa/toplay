const mongoose =require( 'mongoose')


const usersSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        index:true,
        unique:true,
        lowercase: true,
        minlength:3,
        maxlength:8,
    },
    password:{
        type:String,
        required:true
    },
    icon:{
        type:String,
    },
    cover:{
        type:String
    }
}
,{timestamps: true})








module.exports = mongoose.model("users",usersSchema)