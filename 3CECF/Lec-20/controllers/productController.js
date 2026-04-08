const ProductModel = require("../models/productModel")

const showAllProduct = async(req, res)=>{
   try {
    const products= await  ProductModel.find({});
    res.render("Home.ejs", {products})
   } catch (error) {
        console.log(error);
   } 
}


const showAddProductForm = (req, res)=>{
    res.render("addProduct.ejs")
}

const createProduct = async(req, res)=>{
    try {
        await ProductModel.create(req.body);
        res.redirect("/home")  
    } catch (error) {
        console.log(error);
    }
}

const showSingleProduct = async(req, res)=>{
    try {
        const productId = req.params.pid;
        const product = await ProductModel.findById(productId)
        res.render("singleProduct.ejs", {product});
    } catch (error) {
        console.log(error)
    }
}

const showUpdateProductForm =  async(req, res)=>{
    try {
        const productId = req.params.pid;
        const product = await ProductModel.findById(productId);
        res.render("updateProduct.ejs", {product})
    } catch (error) {
        console.log(error);
    }
}

const updateProduct = async(req, res)=>{
    try {
        const productId = req.params.pid;
        const updatedData =  req.body;
        await ProductModel.findByIdAndUpdate(productId, updatedData);
        res.redirect("/home")
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct =  async(req, res)=>{
    try {
        const productId = req.params.pid
        await ProductModel.findByIdAndDelete(productId);
        res.redirect("/home")
    } catch (error) {
        console.log(error);
    }
}

module.exports = {showAllProduct, showAddProductForm, createProduct, showSingleProduct, showUpdateProductForm, updateProduct, deleteProduct}