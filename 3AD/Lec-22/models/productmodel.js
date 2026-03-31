const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    category:String,
    Image:String
})

const Product = mongoose.model("product", productSchema);
module.exports = Product;