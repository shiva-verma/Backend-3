const express = require("express");
const dbConnect = require("./database/db")
const productRoutes = require("./routes/productRoutes")
const userRoutes = require("./routes/userRoutes")
const methodOverride = require('method-override')
const ejsmate = require("ejs-mate")
const ejs = require("ejs")
const app = express();

app.use(express.urlencoded({extended:true}))

dbConnect();
app.engine("ejs", ejsmate)
app.set("view engine", "ejs");
app.set("views", "views")
app.use(methodOverride('_method'))

app.use(productRoutes);
app.use(userRoutes);


app.listen(4000, ()=>{
    console.log("server is running at port 4000")
})