const express = require("express");
const dbConnect = require("./db/db")
const app = express();

dbConnect();
//user routes

//order routes

//product routes

//payment routes


app.listen(4000, ()=>{
    console.log("server is running at port 4000");
})