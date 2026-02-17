const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Welcome to home page")
})

app.get("/dashboard/:year/:section/:rollno", (req, res)=>{

    const studentYear = req.params.year;
    const studentSection = req.params.section;
    const studentrollno = req.params.rollno;
    
    res.send(`student Year: ${studentYear} & his/her section : ${studentSection} & his rollno : ${studentrollno}`)
})

app.get("/products/:category/:cid", (req, res)=>{
    const cate = req.params.category;
    const categoryId = req.params.cid;

    const color = req.query.productcolor;
    const size = req.query.productsize;

    console.log(req.query);
    console.log(req.params);
        
    res.send("product find successfully")
})


app.listen(3000, ()=>{
    console.log("server is running at port 3000")
})