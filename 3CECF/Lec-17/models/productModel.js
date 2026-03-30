const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:[true, "Product name is required"]
    },
    description:String,
    price: Number, 
    quantity: Number,
    category:String,
    image:String
}, {timestamps:true})

const Product = mongoose.model("product", productSchema);
module.exports = Product;