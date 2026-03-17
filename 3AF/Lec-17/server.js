const express = require("express");
const productRoutes = require("./routes/productRoutes")
const ejs = require("ejs");
const methodOverride = require('method-override')
const dbConnect = require("./db/db")
const app = express();
dbConnect();

app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs");
app.set("views", "views");
app.use(methodOverride('_method'))
app.use(productRoutes)

app.listen(5000, ()=>{
    console.log("server is running at port 5000")
})