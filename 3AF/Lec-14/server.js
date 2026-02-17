const express = require("express");
const ProductModel = require("./model/productModel");
const ejs = require("ejs");
const dbConnect = require("./db/db")
const app = express();
dbConnect();

app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/add", (req, res)=>{
    res.render("addProduct")
})

app.post("/product/productDetail", async(req, res)=>{
    try {
        await ProductModel.create(req.body);
        console.log(req.body);
        res.send("data saved successfully")
    } catch (error) {
        console.log(error)
        res.send("something went wrong")
    }
})

app.listen(5000, ()=>{
    console.log("server is running at port 5000")
})