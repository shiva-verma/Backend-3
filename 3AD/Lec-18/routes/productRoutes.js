const express = require("express");
const { showAllProducts, showAddProductForm, createProduct } = require("../controllers/productController");
const router = express.Router();

router.get("/products", showAllProducts)

router.get("/addproduct", showAddProductForm)

router.post("/product/productdetail", createProduct)

module.exports = router