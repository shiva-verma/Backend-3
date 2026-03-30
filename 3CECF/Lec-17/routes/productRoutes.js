const express = require("express");
const ProductModel = require("../models/productModel");
const { showAllProduct, showAddProductForm, createProduct, showSingleProduct, showUpdateProductForm, updateProduct, deleteProduct} = require("../controllers/productController");
const router = express.Router();

router.get("/home", showAllProduct)

router.get("/addproduct", showAddProductForm)

router.post("/product/detail", createProduct)

router.get("/product/:pid", showSingleProduct)

router.get("/updateproduct/:pid", showUpdateProductForm)

router.patch("/product/update/:pid", updateProduct)

router.delete("/product/delete/:pid", deleteProduct)


module.exports = router