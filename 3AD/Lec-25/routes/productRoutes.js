const express = require("express");
const ProductModel = require("../models/productmodel")
const { showAllProducts, showAddProductForm, createProduct } = require("../controllers/productController");
const { isSeller, isLoggedIn } = require("../middleware/authentication");
const Review = require("../models/reviewmodel");
const Product = require("../models/productmodel");
const router = express.Router();

router.get("/products", showAllProducts)

router.get("/addproduct",isLoggedIn, isSeller ,showAddProductForm)

router.post("/product/productdetail", isLoggedIn, isSeller, createProduct)

router.get("/singleproduct/:pid", isLoggedIn ,async(req, res)=>{
    try {
        const productId = req.params.pid;
        const product = await ProductModel.findById(productId)
        res.render("Products/singleProduct", {product})
    } catch (error) {
        console.log(error);
    }
})

router.get("/edit/:pid",isLoggedIn, isSeller ,async(req, res)=>{
    try {
        const productId = req.params.pid;
        const product = await ProductModel.findById(productId);
        res.render("Products/updateProduct", {product});
    } catch (error) {
        console.log(error);
    }
})

router.patch("/productdetail/:pid",isLoggedIn, isSeller,async(req, res)=>{
    try {
        const productId = req.params.pid;
        const updatedData =  req.body;
        await ProductModel.findByIdAndUpdate(productId, updatedData)
        res.redirect("/products");  
    } catch (error) {
        console.log(error);
    }
})

router.delete("/product/:pid",isLoggedIn, isSeller, async(req, res)=>{
  try {
    const productId = req.params.pid;
    await ProductModel.findByIdAndDelete(productId);
    res.redirect("/products")
  } catch (error) {
    console.log(error);
  }
})


///reviews
router.post("/review/:pid", async(req, res)=>{
    const productId = req.params.pid;
    const product = await Product.findById(productId)

    const reviewId = await Review.create(req.body);

    product.reviews.push(reviewId);

    await product.save();
    res.redirect(`/product/${productId}`)
})

module.exports = router