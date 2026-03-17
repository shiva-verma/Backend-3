const express = require("express");
const dbConnect = require("./database/db")
const productRoutes = require("./routes/productRoutes")
const ejs = require("ejs")
const app = express();

app.use(express.urlencoded({extended:true}))

dbConnect();
app.set("view engine", "ejs");
app.set("views", "views")

app.use(productRoutes);


app.listen(4000, ()=>{
    console.log("server is running at port 4000")
})