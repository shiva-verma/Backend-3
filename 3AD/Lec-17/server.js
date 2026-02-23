const express = require("express");
const dbConnect = require("./database/db")
const ProductModel = require("./models/productmodel")
const ejs = require("ejs")
const app = express();

app.use(express.urlencoded({extended:true}))

dbConnect();
app.set("view engine", "ejs");
app.set("views", "views")

app.get("/products", async(req, res)=>{
    try {
        const allProducts = await ProductModel.find({});
        console.log(allProducts);
        res.render("Home.ejs", {allProducts});
    } catch (error) {
        console.log(error)
    }
})

app.get("/addproduct", (req, res)=>{
    res.render("addProduct.ejs")
})

app.post("/product/productdetail", async(req, res)=>{
    try {
        await ProductModel.create(req.body)
        res.redirect("/products")
    } catch (error) {
        console.log(error);
        res.send("something went wrong")
    }
})

app.listen(4000, ()=>{
    console.log("server is running at port 4000")
})