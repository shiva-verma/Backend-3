const ProductModel = require("../models/productmodel")

const showAllProducts = async(req, res)=>{
    try {
        const allProducts = await ProductModel.find({});
        console.log(allProducts);
        res.render("Products/Home.ejs", {allProducts});
    } catch (error) {
        console.log(error)
    }
}

const showAddProductForm = (req, res)=>{
    res.render("Products/addProduct.ejs")
}

const createProduct = async(req, res)=>{
    try {
        await ProductModel.create(req.body)
        res.redirect("/products")
    } catch (error) {
        console.log(error);
        res.send("something went wrong")
    }
}


module.exports = {showAllProducts, showAddProductForm, createProduct}