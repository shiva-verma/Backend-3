const express = require("express");
const dbConnect = require("./database/db")
const productRoutes = require("./routes/productRoutes")
const userRoutes = require("./routes/userRoutes")
const methodOverride = require('method-override')
const ejsmate = require("ejs-mate")
const passport = require("passport");
const LocalStrategy = require("passport-local")
const ejs = require("ejs");
const User = require("./models/usermodel");
const session = require('express-session')
const app = express();

let sessionObject = {
  secret: 'keyboard cat',
  resave: false,
  cookie:  {
      httpOnly: true,
      secure: false,
      maxAge: 60000
    }
  }

app.use(express.urlencoded({extended:true}))
app.use(session(sessionObject))

dbConnect();
app.engine("ejs", ejsmate)
app.set("view engine", "ejs");
app.set("views", "views")
app.use(methodOverride('_method'))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.use(passport.authenticate("session"));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next)=>{
  res.locals.currUser = req.user;
  next();
})

app.use(productRoutes);
app.use(userRoutes);




app.listen(4000, ()=>{
    console.log("server is running at port 4000")
})