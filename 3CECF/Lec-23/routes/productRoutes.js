const express = require("express");
const ProductModel = require("../models/productModel");
const { showAllProduct, showAddProductForm, createProduct, showSingleProduct, showUpdateProductForm, updateProduct, deleteProduct} = require("../controllers/productController");
const { isLoggedIn, isSeller, isBuyer } = require("../middleware/authentication");
const Review = require("../models/reviewModel");
const Product = require("../models/productModel");
const router = express.Router();

router.get("/home", showAllProduct)

router.get("/addproduct", isLoggedIn, isSeller, showAddProductForm)

router.post("/product/detail", isLoggedIn, isSeller, createProduct)

router.get("/product/:pid", isLoggedIn, showSingleProduct)

router.get("/updateproduct/:pid", isLoggedIn, isSeller, showUpdateProductForm)

router.patch("/product/update/:pid", isLoggedIn, isSeller, updateProduct)

router.delete("/product/delete/:pid", isLoggedIn, isSeller, deleteProduct)

//review

router.post("/review/:pid", async(req, res)=>{

    const productid = req.params.pid;
    const product = await Product.findById(productid);

    const reviewId = await Review.create(req.body);

    product.reviews.push(reviewId);

    await product.save();

    res.redirect(`/product/${productid}`)


})

//review deleted
router.delete("/review/del/:rid/:pid", isBuyer , async(req, res)=>{
    const reviewId = req.params.rid;
    const productId = req.params.pid;
    const {rid, pid} = req.params;

    await Review.findByIdAndDelete(rid);
    res.redirect(`/product/${pid}`)
})

router.get("/cart/:pid", (req, res)=>{
    const productId = req.params.pid;

    const activeUser = req.user;

    activeUser.cart.push(productId);

    activeUser.save();

    res.send("product added to cart successfully")
})

router.get("/mycart", async(req, res)=>{
    const activeUser = await req.user.populate("cart");
    const cartItem = await activeUser.cart;
    res.render("cart.ejs", {cartItem})
})


module.exports = router