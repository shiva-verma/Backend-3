const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title:String,
    description:String,
    Price:Number,
    quantity:Number,
    Image:String,
    category:String
})