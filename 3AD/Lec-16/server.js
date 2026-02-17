const express = require("express");
const dbConnect = require("./database/db")
const ProductModel = require("./models/productmodel")
const ejs = require("ejs")
const app = express();

app.use(express.urlencoded({extended:true}))

dbConnect();
app.set("view engine", "ejs");
app.set("views", "views")


app.get("/addproduct", (req, res)=>{
    res.render("addProduct.ejs")
})

app.post("/product/productdetail", async(req, res)=>{
    try {
        await ProductModel.create(req.body)
        res.send("data saved succesfully")
    } catch (error) {
        console.log(error);
        res.send("something went wrong")
    }
})

app.listen(4000, ()=>{
    console.log("server is running at port 4000")
})