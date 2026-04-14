const express = require("express");
const { showAddProductForm, createProduct, showAllProducts, showSingleProduct, showUpdateProductForm, updateProduct, deleteProduct } = require("../controllers/productController");
const Review = require("../model/reviewModel");
const Product = require("../model/productModel");
const router = express.Router();

router.get("/add", showAddProductForm)

router.post("/product/productDetail", createProduct)

router.get("/home", showAllProducts)

router.get("/singleproduct/:pid", showSingleProduct)

router.get("/edit/:pid", showUpdateProductForm)

router.patch("/product/update/:pid", updateProduct)

router.delete("/product/:pid", deleteProduct)

//review
router.post("/review/:pid", async(req, res)=>{
    const productId = req.params.pid;
    const product = await Product.findById(productId)

    const reviewData = req.body;
    const reviewId = await Review.create(reviewData);

    product.reviews.push(reviewId);
    await product.save();

    res.redirect(`/singleproduct/${productId}`)
})


module.exports = router
