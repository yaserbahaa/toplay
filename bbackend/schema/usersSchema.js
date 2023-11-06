const mongoose =require( 'mongoose')


const usersSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        index:true,
        unique:true,
        lowercase: true,
        minlength:4,
        maxlength:12,
    },
    password:{
        type:String,
        required:true
    },

}
,{timestamps: true})








module.exports = mongoose.model("users",usersSchema)