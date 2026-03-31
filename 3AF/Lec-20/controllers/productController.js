const ProductModel = require("../model/productModel")

const showAddProductForm = (req, res)=>{
    res.render("addProduct")
}

const createProduct = async(req, res)=>{
    try {
        await ProductModel.create(req.body);
        console.log(req.body);
        res.redirect("/home")
    } catch (error) {
        console.log(error)
        res.send("something went wrong")
    }
}

const showAllProducts = async(req, res)=>{
    const products = await ProductModel.find({});
    res.render("allProduct", {products})
}

const showSingleProduct = async(req, res)=>{
    try {
        const productid  = req.params.pid;
        const product = await ProductModel.findById(productid)
        res.render("singleProduct", {product})
    } catch (error) {
        console.log(error);
    }
}

const showUpdateProductForm = async(req, res)=>{
    try {
        const productId = req.params.pid;
        const product = await ProductModel.findById(productId)
        res.render("updateProduct", {product})
    } catch (error) {
        console.log(error);
    }
}

const updateProduct = async(req, res)=>{
    try {
        const productId = req.params.pid;
        const updatedData = req.body;
        await ProductModel.findByIdAndUpdate(productId, updatedData);
        res.redirect("/home")
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = async(req, res)=>{
    try {
        const productId = req.params.pid;
        await ProductModel.findByIdAndDelete(productId)
        res.redirect("/home")
    } catch (error) {
        console.log(error);
    }
}

module.exports = {showAddProductForm, createProduct, showAllProducts, showSingleProduct, showUpdateProductForm, updateProduct, deleteProduct}