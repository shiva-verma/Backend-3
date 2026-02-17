const express = require("express");
const app = express();

app.get("/home", (req, res)=>{
    res.send("hello")
})

app.get("/dashboard/:section/:rollno", (req, res)=>{
        const sec = req.params.section;
        const roll = req.params.rollno;

        res.send(`section is :${sec} & roll no is : ${roll}`)
})

app.get("/products/:category/:cid", (req, res)=>{
        const category = req.params.category;
        const cid = req.params.cid;

        const productColor = req.query.productcolor
        const productSize = req.query.productsize;

        res.send(`Customer has choose ${category} category of color ${productColor} & size ${productSize}`)
})

app.listen(3000, ()=>{
    console.log("server is running at port 3000")
})