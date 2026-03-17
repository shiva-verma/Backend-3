const express = require("express");
const dbConnect = require("./database/db");
const productRoutes = require("./routes/productRoutes")
const ejs = require("ejs")
const app = express();

dbConnect();
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(productRoutes)


app.listen(5000, ()=>{
    console.log("server is running at port 5000");
})