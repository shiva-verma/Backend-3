const express = require("express");
const path = require("path")
const app = express();


app.use(express.urlencoded({extended:true}));
const filepath = path.join(__dirname, "contact.html")

app.get("/contact", (req, res)=>{
    res.sendFile(filepath)
})

app.post("/studentdetail", (req, res)=>{
    console.log(req.body);
    res.send("data sent successfully")
})

app.listen(4000, ()=>{
    console.log("server is running at port 4000")
})