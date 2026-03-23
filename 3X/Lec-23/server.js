const express = require("express");
const dbConnect = require("./db/db")
const productRoute = require("./routes/productRoutes");
const userRoute = require("./routes/userRoutes");
const methodOverride = require('method-override')
const ejsmate = require("ejs-mate")
const ejs = require("ejs");
const app = express();

dbConnect();

app.use(express.urlencoded({extended:true}));

app.use(methodOverride('_method'))

app.engine('ejs', ejsmate)
app.set("view engine", "ejs");
app.set("views", "views");

app.use(productRoute);
app.use(userRoute);



app.listen(4000, ()=>{
    console.log("server is running at port 4000");
})