const { Timestamp } = require("mongodb")
const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required:true,
        minLength: 8,
        maxLength: 20
    }
}, {timestamps:true})

const userschema = mongoose.model('userSchema', userSchema);
module.exports = userschema;