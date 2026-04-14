const express = require("express");
const productRoutes = require("./routes/productRoutes")
const userRoutes = require("./routes/userRoutes")
const ejs = require("ejs");
const ejsmate = require("ejs-mate")
const methodOverride = require('method-override')
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./model/userModel")
const Session = require("express-session")
const dbConnect = require("./db/db")
const app = express();
dbConnect();

const sesss = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie:  {
      httpOnly: true,
      secure: false,
      maxAge: 60000
    }
  }

app.use(Session(sesss))

app.use(express.urlencoded({extended:true}))
app.engine("ejs", ejsmate)
app.set("view engine", "ejs");
app.set("views", "views");
app.use(methodOverride('_method'))


app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser())

app.use(productRoutes)
app.use(userRoutes)

app.listen(5000, ()=>{
    console.log("server is running at port 5000")
})