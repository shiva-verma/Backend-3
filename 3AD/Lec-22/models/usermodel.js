const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname:string,
    email:String,
    password:String,
    role:String
})

const User = mongoose.model("user", userSchema);
module.exports = User;