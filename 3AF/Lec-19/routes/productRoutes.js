const express = require("express");
const { showAddProductForm, createProduct, showAllProducts, showSingleProduct, showUpdateProductForm, updateProduct, deleteProduct } = require("../controllers/productController");
const router = express.Router();

router.get("/add", showAddProductForm)

router.post("/product/productDetail", createProduct)

router.get("/home", showAllProducts)

router.get("/singleproduct/:pid", showSingleProduct)

router.get("/edit/:pid", showUpdateProductForm)

router.patch("/product/update/:pid", updateProduct)

router.delete("/product/:pid", deleteProduct)


module.exports = router
