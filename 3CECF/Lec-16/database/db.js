const mongoose = require("mongoose");

async function dbConnect(){
    try {
        await mongoose.connect("mongodb://localhost:27017/E-commerce");
        console.log("db connected")
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = dbConnect;