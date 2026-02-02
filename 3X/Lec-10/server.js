const express = require("express");
const path =  require("path")
const app = express();

//get --> fetch data from server
//post --> sent data to server
//put --> update to replace any data
//patch --> update for small fix
//delete --> delete data

app.get("/", (req, res)=>{
    res.send("Welcome to home page")
})

app.get("/about", (req, res)=>{
    res.send("<h1>Welcome to About page</h1>")
})
const filepath = path.join(__dirname, "contact.html")

app.get("/contact", (req, res)=>{
    res.sendFile(filepath)
})

app.listen(3000, ()=>{
    console.log("server is running  at port 3000")
})