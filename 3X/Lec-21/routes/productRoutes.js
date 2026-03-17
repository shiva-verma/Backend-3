const express = require("express");
const ProductModel = require("../model/productSchema");
const { getAllProducts, showAddProductForm, addProduct, singleProduct } = require("../controllers/productController");
const router = express.Router();

router.get("/products", getAllProducts)


router.get("/product/:pid", singleProduct)

router.get("/add", showAddProductForm)

router.post("/product/productDetail", addProduct)

router.get("/edit/:pid", async(req, res)=>{
    try {
        const productId = req.params.pid
        const product = await ProductModel.findById(productId);
        res.render("updateProduct", {product})
    } catch (error) {
        console.log(error)
    }
})

router.patch("/product/detail/:pid", async(req, res)=>{
        try {
            const productId = req.params.pid;
            const updatedData = req.body;
            await ProductModel.findByIdAndUpdate(productId, updatedData);
            res.send("data updated")
        } catch (error) {
            console.log(error);
        }
})




module.exports = router;