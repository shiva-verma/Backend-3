const express = require("express");
const dbConnect = require("./db/db")
const productRoute = require("./routes/productRoutes");
const ejs = require("ejs");
const app = express();

dbConnect();

app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(productRoute);

//user routes

//order routes

//product routes

//payment routes


app.listen(4000, ()=>{
    console.log("server is running at port 4000");
})