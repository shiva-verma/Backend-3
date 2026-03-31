const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title:String,
    description:String,
    Price:Number,
    Image:String,
    category:String
})

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;