const express = require("express");
const dbConnect = require("./db/db")
const ejs = require("ejs");
const app = express();

dbConnect();

app.set("view engine", "ejs");
app.set("views", "views");

//user routes

//order routes

//product routes

//payment routes


app.listen(4000, ()=>{
    console.log("server is running at port 4000");
})