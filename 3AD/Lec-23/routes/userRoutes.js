const express = require("express");
const router = express.Router();
const User = require("../models/usermodel")

router.get("/register", (req, res)=>{
    res.render("Users/register")
})

router.get("/login", (req, res)=>{
    res.render("Users/login")
})

router.post("/signup", async(req, res)=>{
    const data = req.body;
    await User.create(req.body);
    res.send("data saved succesffuuly")
})

module.exports = router;