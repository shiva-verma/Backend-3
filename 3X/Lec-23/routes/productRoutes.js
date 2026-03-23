const express = require("express");
const ProductModel = require("../model/productSchema");
const { getAllProducts, showAddProductForm, addProduct, singleProduct, showUpdateProductForm, updateProduct, deleteProduct } = require("../controllers/productController");
const router = express.Router();

//show all products
router.get("/products", getAllProducts)

//show single product
router.get("/product/:pid", singleProduct)

//show  add product form
router.get("/add", showAddProductForm)

//create product
router.post("/product/productDetail", addProduct)

//show update product form
router.get("/edit/:pid", showUpdateProductForm)

//update product
router.patch("/product/detail/:pid", updateProduct)

//delete product
router.delete("/product/:pid", deleteProduct)


module.exports = router;