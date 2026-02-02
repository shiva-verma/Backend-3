const express = require("express")
const path = require("path")
const app = express();

//get --> data sent to client
//post --> data sent to server
//put --> update
//patch --> update
//delete --> delete data

app.get("/home", (req, res)=>{
       res.send("Welcome to home page"); 
})

app.get("/about", (req, res)=>{
    res.send("<h1>Welcome to about page</h1>")
})

const filepath = path.join(__dirname, "contact.html")
app.get("/contact", (req, res)=>{
    res.sendFile(filepath)
})



app.listen(4000, ()=>{
    console.log("server is runinng at port 5000")
})