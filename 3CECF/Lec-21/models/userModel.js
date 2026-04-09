const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new mongoose.Schema({
    email:String,
    phone:Number,
    role:String 
}, {timestamps:true})

userSchema.plugin(passportLocalMongoose.default)

const User = mongoose.model("user", userSchema);
module.exports = User;