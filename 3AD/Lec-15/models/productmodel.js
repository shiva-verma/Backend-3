const mongoose = require("mongoose");
import { type } from './../node_modules/@types/whatwg-url/index.d';
import { Trim } from './../node_modules/mongoose/types/expressions.d';

new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Product title is required"],
        trim:true
    },
    description:String,
    price:Number
})