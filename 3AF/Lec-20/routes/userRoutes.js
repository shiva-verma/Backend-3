const express = require("express");
const router = express.Router();

router.get("/register", (req, res)=>{
    res.render("register.ejs")
})

router.get("/login", (req, res)=>{
    res.render("login.ejs")
})

router.post("/signup", (req, res)=>{
    console.log(req.body);
    res.send("data saved succesfully")
})

module.exports = router
