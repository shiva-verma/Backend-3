const express = require("express");
const router = express.Router();
const User = require("../models/usermodel");
const passport = require("passport");

router.get("/register", (req, res)=>{
    res.render("Users/register")
})

router.get("/login", (req, res)=>{
    res.render("Users/login")
})

router.post("/signup", async(req, res)=>{
    const {username, email, password, role} = req.body;
    const user = new User({username, email, role});
    await User.register(user, password);
    res.redirect("/login");
})

router.post("/signIn", passport.authenticate("local", {failureRedirect:"/register"}), (req, res)=>{
    console.log(req.user);
    res.redirect("/products")
})

router.post("/logout", (req, res, next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        res.redirect("/login")
    });
});

module.exports = router;