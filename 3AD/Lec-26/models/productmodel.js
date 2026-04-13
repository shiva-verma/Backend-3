const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    category:String,
    Image:String,
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }
    ]
})

const Product = mongoose.model("product", productSchema);
module.exports = Product;