const express = require("express");
const path = require("path")
const app = express();

const filePath = path.join(__dirname, "contact.html")
app.use(express.urlencoded({extended:true}))

app.get("/dashboard/:section/:rollno", (req, res)=>{
    const section = req.params.section;
    const roll = req.params.rollno;

    res.send(`Student Section is: ${section} & roll number is : ${roll}`)
})

app.get("/dashboard", (req, res)=>{
    const sec = req.query.section;
    const roll = req.query.rollno;
    console.log(req.query);
    res.send("hello");
})

app.get("/contact", (req, res)=>{
    res.sendFile(filePath)
})

app.post("/studentdata", (req, res)=>{
    console.log(req.body)
    res.send("data successfully sent to server")
})

app.listen(2000, ()=>{
    console.log("server is running at port 2000")
})