const express = require("express");
const ProductModel = require("./model/productModel");
const ejs = require("ejs");
const methodOverride = require('method-override')
const dbConnect = require("./db/db")
const app = express();
dbConnect();

app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs");
app.set("views", "views");
app.use(methodOverride('_method'))

app.get("/add", (req, res)=>{
    res.render("addProduct")
})

app.post("/product/productDetail", async(req, res)=>{
    try {
        await ProductModel.create(req.body);
        console.log(req.body);
        res.redirect("/home")
    } catch (error) {
        console.log(error)
        res.send("something went wrong")
    }
})

app.get("/home", async(req, res)=>{
    const products = await ProductModel.find({});
    res.render("allProduct", {products})
})

app.get("/singleproduct/:pid", async(req, res)=>{
    try {
        const productid  = req.params.pid;
        const product = await ProductModel.findById(productid)
        res.render("singleProduct", {product})
    } catch (error) {
        console.log(error);
    }
})

app.get("/edit/:pid", async(req, res)=>{
    try {
        const productId = req.params.pid;
        const product = await ProductModel.findById(productId)
        res.render("updateProduct", {product})
    } catch (error) {
        console.log(error);
    }
})

app.patch("/product/update/:pid", async(req, res)=>{
    try {
        const productId = req.params.pid;
        const updatedData = req.body;
        await ProductModel.findByIdAndUpdate(productId, updatedData);
        res.redirect("/home")
    } catch (error) {
        console.log(error);
    }
})

app.listen(5000, ()=>{
    console.log("server is running at port 5000")
})