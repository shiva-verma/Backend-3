const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    fullname:String,
    email:String,
    role:String
})

userSchema.plugin(passportLocalMongoose.default);

const User = mongoose.model("user", userSchema);
module.exports = User;