const express = require("express");
const ProductModel = require("../models/productModel");
const { showAllProduct, showAddProductForm, createProduct, showSingleProduct, showUpdateProductForm, updateProduct, deleteProduct} = require("../controllers/productController");
const { isLoggedIn, isSeller } = require("../middleware/authentication");
const router = express.Router();

router.get("/home", showAllProduct)

router.get("/addproduct", isLoggedIn, isSeller, showAddProductForm)

router.post("/product/detail", isLoggedIn, isSeller, createProduct)

router.get("/product/:pid", isLoggedIn, showSingleProduct)

router.get("/updateproduct/:pid", isLoggedIn, isSeller, showUpdateProductForm)

router.patch("/product/update/:pid", isLoggedIn, isSeller, updateProduct)

router.delete("/product/delete/:pid", isLoggedIn, isSeller, deleteProduct)


module.exports = router