const express = require("express");
const app = express();

app.get("/dashboard/:section/:rollno", (req, res)=>{
    const s = req.params.section;
    const rol =  req.params.rollno;
    console.log(`section: ${s} & roll no : ${rol}`)
    res.send("hiii")
})

app.listen(3000, ()=>{
    console.log("server is running at port 3000")
})