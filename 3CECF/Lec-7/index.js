const express = require("express");
const path = require("path")
const app = express();

const filepath = path.join(__dirname, "profile.html");

app.get("/", (req, res)=>{
    res.send("Hello")
})

app.get("/about", (req, res)=>{
    res.send("<h1>Welcome to About page</h1>")
})

app.get("/contact", (req, res)=>{
    res.send("<h1>Welcome to contact page</h1>")
})


app.get("/profile", (req, res)=>{
    res.sendFile(filepath)
})

app.get("/dashboard/student/:section/:studentRollno", (req, res)=>{
    const studentId = req.params.studentRollno;
    const sec = req.params.section;

    res.send(`student data fetch of ${sec}  & roll  number :${studentId}`)
})


app.listen(4000, ()=>{
    console.log("server is running at port 4000")
})

