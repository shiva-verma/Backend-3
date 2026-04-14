const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    fullname:String,
    email:String,
    role:String
})

const Review = mongoose.model("review", reviewSchema);
module.exports = Review;