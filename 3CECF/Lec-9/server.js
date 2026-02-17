const express = require("express");
const path = require("path")
const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.send("welcome to hom page")
})

app.get("/addproduct", (req, res)=>{
    res.sendFile(path.join(__dirname + "/addProduct.html"))
})

app.post("/product/detail", (req, res)=>{
        const fullname  = req.body.name;
        const age = req.body.age;
        
        res.send("data sent succesfully")
})

app.listen(5000, ()=>{
    console.log("server is running at port 5000")
})