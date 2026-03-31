const express = require("express");
const router = express.Router();

router.get("/register", (req, res)=>{
    res.render("Users/register")
})

router.get("/login", (req, res)=>{
    res.render("Users/login")
})

module.exports = router;