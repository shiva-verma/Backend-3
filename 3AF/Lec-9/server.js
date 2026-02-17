const express = require("express");
const app = express();

app.get("/products/:cname/:pname/:pid", (req, res)=>{
    const categoryname = req.params.cname
    const productname  = req.params.pname
    const productid = req.params.pid

    const color = req.query.productcolo 
    const size = req.query.productsize
    const fabric = req.query.fabric

    console.log(`color: ${color} & size :${size} & fabric : ${fabric} & prodcutname: ${productname} & productcategory: ${categoryname}`)
    res.send("hiii")
})

app.listen(5000, ()=>{
    console.log("server is running at port 5000")
})