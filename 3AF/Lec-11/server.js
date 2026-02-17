const express = require("express");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/home", (req, res)=>{
    res.render("home.ejs", {title:"flipkart"});
})
app.get("/about", (req, res)=>{
    res.render("about.ejs", person = {name:"Abcde", age:45});
})
app.get("/contact", (req, res)=>{
    res.render("contact.ejs");
})

app.listen(3000, ()=>{
    console.log("server is running at port 3000")
})
