const express = require("express");
const ProductModel = require("../models/productModel");
const { showAllProduct, showAddProductForm, createProduct, showSingleProduct, showUpdateProductForm} = require("../controllers/productController");
const router = express.Router();

router.get("/home", showAllProduct)

router.get("/addproduct", showAddProductForm)

router.post("/product/detail", createProduct)

router.get("/product/:pid", showSingleProduct)

router.get("/updateproduct/:pid", showUpdateProductForm)

module.exports = router