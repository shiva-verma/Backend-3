const express = require("express");
const dbConnect = require("./database/db");
const ProductModel = require("./models/productModel");
const ejs = require("ejs")
const app = express();

dbConnect();
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/home", async(req, res)=>{
   try {
    const products= await  ProductModel.find({});
    res.render("Home.ejs", {products})
   } catch (error) {
        console.log(error);
   } 
})



app.get("/addproduct", (req, res)=>{
    res.render("addProduct.ejs")
})

app.post("/product/detail", async(req, res)=>{
    try {
        await ProductModel.create(req.body);
        res.redirect("/home")  
    } catch (error) {
        console.log(error);
    }
})

app.get("/product/:pid", async(req, res)=>{
    try {
        const productId = req.params.pid;
        const product = await ProductModel.findById(productId)
        res.render("singleProduct.ejs", {product});
    } catch (error) {
        console.log(error)
    }
})

app.listen(5000, ()=>{
    console.log("server is running at port 5000");
})