const express = require("express");
const User = require("../model/userModel");
const passport = require("passport");
const router = express.Router();

router.get("/register", (req, res)=>{
    res.render("register.ejs")
})

router.get("/login", (req, res)=>{
    res.render("login.ejs")
})

router.post("/signup", async(req, res)=>{
    const {username , email, password, role} = req.body;

    const user = new User({username, email, role});

    await User.register(user, password);

    res.redirect("/login")
})

router.post("/signIn",  passport.authenticate('local', { failureRedirect: '/login' }), (req, res)=>{
    res.redirect("/home")
})

module.exports = router
