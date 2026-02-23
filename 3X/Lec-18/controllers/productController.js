const ProductModel = require("../model/productSchema");

const getAllProducts = async(req, res)=>{
    try {
        const allProducts = await ProductModel.find({});
        res.render("Home.ejs", {allProducts});
    } catch (error) {
        console.log(error);
        res.send("something went wrong") 
    }
}

const showAddProductForm = (req, res)=>{
        res.render("addProduct");
}


const addProduct = async(req, res)=>{
        try {
            await ProductModel.create(req.body);
            res.redirect("/products") 
        } catch (error) {
            console.log(error)  
            res.send("something went wrong") 
        }
}

module.exports = {getAllProducts, showAddProductForm, addProduct};