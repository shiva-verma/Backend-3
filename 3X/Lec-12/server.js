const express = require("express");
const path = require("path")
const app = express();

app.use(express.urlencoded({extended:true}));

app.get("/home", (req, res)=>{
      res.send("welcome to home page")
})

app.get("/dashbord/:section/:rollno", (req, res)=>{
        const sec = req.params.section;
        const rollno = req.params.rollno;

        res.send(`student Section :${sec} & student roll number: ${rollno}`)

})

app.get("/products/:category/:productname/:pid", (req, res)=>{
        const category = req.params.category;
        const productname =  req.params.productname;
        const productid = req.params.pid;

        const color = req.query.productcolor;
        const size = req.query.productsize;
        
        res.send(`buyer has buy a ${productname} of ${color} color with a ${size} size`)

})

const filepath = path.join(__dirname, "contact.html");

app.get("/contact", (req, res)=>{
        res.sendFile(filepath)
})

app.post("/studentdata", (req, res)=>{
        console.log(req.body);
        res.send("data sent successfully");
})

app.listen(4000, ()=>{
    console.log("server is running at port 4000")
})