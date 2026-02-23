const express = require("express");
const ProductModel = require("../model/productSchema");
const { getAllProducts, showAddProductForm, addProduct, singleProduct } = require("../controllers/productController");
const router = express.Router();

router.get("/products", getAllProducts)


router.get("/product/:pid", singleProduct)

router.get("/add", showAddProductForm)

router.post("/product/productDetail", addProduct)

// router.put("product/productId", )

// router.delete("product/productId", )



module.exports = router;