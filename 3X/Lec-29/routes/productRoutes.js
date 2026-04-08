const express = require("express");
const ProductModel = require("../model/productSchema");
const { getAllProducts, showAddProductForm, addProduct, singleProduct, showUpdateProductForm, updateProduct, deleteProduct } = require("../controllers/productController");
const { isLoggedIn, isSeller } = require("../middleware/authenticate");
const Review = require("../model/reviewSchema");
const Product = require("../model/productSchema");
const router = express.Router();

//show all products
router.get("/products", getAllProducts)

//show single product
router.get("/product/:pid", isLoggedIn , singleProduct)

//show  add product form
router.get("/add" , isLoggedIn, isSeller,  showAddProductForm)

//create product
router.post("/product/productDetail",  isLoggedIn , isSeller, addProduct)

//show update product form
router.get("/edit/:pid",  isLoggedIn , isSeller, showUpdateProductForm)

//update product
router.patch("/product/detail/:pid",  isLoggedIn , isSeller, updateProduct)

//delete product
router.delete("/product/:pid",  isLoggedIn, isSeller, deleteProduct)

//Review created 
router.post("/review/:pid", async(req, res)=>{
    const pid =  req.params.pid;
    const product = await Product.findById(pid);

    const rid = await Review.create(req.body);
    product.reviews.push(rid);

    await product.save();

    res.redirect(`product/${pid}`)
})


module.exports = router;