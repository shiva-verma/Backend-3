const express = require("express")
const path = require("path");
const app = express();

// http methods
//get --> fetch data from server
//post ==> send data to server from client
//put ==> update data  --> replace user whole data
//patch ==> update data  --> small fix
//delete ==> delete data

let studentDetail = {
    name:"shiv",
    age:25,
    email:"tast@gmail.com"
}

app.get("/home", (req, res)=>{
     res.send("Welcome to home page")
})

app.get("/about", (req, res)=>{
     res.send("<h1>Welcome to about page</h1>")
})

const filepath = path.join(__dirname, "contact.html")

app.get("/contact", (req, res)=>{
     res.sendFile(filepath)
})

app.get("/contact", (req, res)=>{
     res.sendFile(filepath)
})
app.get("/myprofile", (req, res)=>{
     res.json(studentDetail)
})

app.listen(4000, ()=>{
    console.log("server is running at port 4000")
})