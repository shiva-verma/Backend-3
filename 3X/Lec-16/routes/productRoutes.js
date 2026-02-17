const express = require("express");
const router = express.Router();

//route to show all product
router.get("/products", (req, res)=>{

})

//route for single product page
router.get("product/productId", (req, res)=>{

})
//route for addProduct form page
router.get("/add", (req, res)=>{
        res.render("addProduct");
})

//create a product and add it into datbase
router.post("product/productDetail", (req, res)=>{

})

//route for updating a product
router.put("product/productId", (req, res)=>{

})

//route for deleting a product
router.delete("product/productId", (req, res)=>{

})



module.exports = router;