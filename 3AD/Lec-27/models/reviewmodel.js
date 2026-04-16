const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    comment:String,
    rating:Number
})


const Review = mongoose.model("review", reviewSchema);
module.exports = Review;