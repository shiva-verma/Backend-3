const express = require("express");
const app = express();

app.get("/dashboard/:section/:studentrollno", (req, res)=>{
    const sec = req.params.section;
    const roll = req.params.studentrollno;


    res.send(`student section is : ${sec} & its roll number is ${roll}`)
})

app.listen(3000, ()=>{
    console.log("server is running at port 3000")
})