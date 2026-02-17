const express = require("express");
const path = require("path");
const ejs = require('ejs');
const app = express();

app.set("view engine", "ejs")
app.set("views", "views")

app.get("/home", (req, res)=>{
    res.render("home", {name:"shiv", age:25})
})


// app.use(express.static(path.join(__dirname, "static")))

// app.get('/script.js',(req, res)=>{
//     res.send("hiii")
// })

app.listen(4000, ()=>{
    console.log("server is running at port 4000")
})