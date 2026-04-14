const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title:String,
    description:String,
    Price:Number,
    Image:String,
    category:String,
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }
    ]
})

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;