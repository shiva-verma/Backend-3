const express = require("express");
const ProductModel = require("../models/productmodel")
const { showAllProducts, showAddProductForm, createProduct } = require("../controllers/productController");
const router = express.Router();

router.get("/products", showAllProducts)

router.get("/addproduct", showAddProductForm)

router.post("/product/productdetail", createProduct)

router.get("/singleproduct/:pid", async(req, res)=>{
    try {
        const productId = req.params.pid;
        const product = await ProductModel.findById(productId)
        res.render("singleProduct", {product})
    } catch (error) {
        console.log(error);
    }
})

router.get("/edit/:pid", async(req, res)=>{
    try {
        const productId = req.params.pid;
        const product = await ProductModel.findById(productId);
        res.render("updateProduct", {product});
    } catch (error) {
        console.log(error);
    }
})

router.patch("/productdetail/:pid", async(req, res)=>{
    try {
        const productId = req.params.pid;
        const updatedData =  req.body;
        await ProductModel.findByIdAndUpdate(productId, updatedData)
        res.redirect("/products");  
    } catch (error) {
        console.log(error);
    }
})

router.delete("/product/:pid", async(req, res)=>{
  try {
    const productId = req.params.pid;
    await ProductModel.findByIdAndDelete(productId);
    res.redirect("/products")
  } catch (error) {
    console.log(error);
  }
})

module.exports = router