const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:String,
    fullname:String,
    usertype:String,
    password:string
},{timestamps:true})

const User = mongoose.model("User", userSchema);
module.exports = User;