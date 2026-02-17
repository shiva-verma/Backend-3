const express = require("express");
const path = require("path")
const ejs = require("ejs")
const app = express();

app.set("view engine", "ejs")
app.set("views", "views")

// app.use(express.static(path.join(__dirname, "public")));

app.get("/home", (req, res)=>{
    res.render("home.ejs", {name:"aha", age:56})
})

// app.get("/home", (req, res)=>{
//     res.sendFile(path.join(__dirname + "/index.html"));
// })

// app.get('/script.js', (req, res)=>[
//     res.send("hiii")
// ])

app.listen(4000, ()=>{
    console.log("server is running at port 4000")
})