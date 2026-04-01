const express = require("express");
const dbConnect = require("./database/db");
const productRoutes = require("./routes/productRoutes")
const userRoutes = require("./routes/userRoutes")
const methodOverride = require('method-override')
const ejsmate = require("ejs-mate")
const ejs = require("ejs");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/userModel");
const session = require('express-session')
const app = express();

app.use(session({
  secret: 'keyboard cat',
  saveUninitialized: true,
  cookie: {
      httpOnly: true,
      secure:false,
      maxAge: 60000
    }
  }
))

dbConnect();
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended:true}));
app.engine("ejs", ejsmate)
app.set("view engine", "ejs");
app.set("views", "views");

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.use(passport.authenticate("session"))


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(productRoutes)
app.use(userRoutes)


app.get("/health-check", (req, res)=>{
    res.send("everything is fine")
})


app.listen(4000, ()=>{
    console.log("server is running at port 4000");
})