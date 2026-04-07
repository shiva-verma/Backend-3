function verifyUser(req, res, next){
      const data = req.body;
      const email = data.email;
      const password = data.password;

      const userExist = User.find(email, password);

      if(userExist){
        return next()
      }else{
        return res.send("user not existed")
      }
}

function isSeller(req, res, next){
        if(req.body.usertype === "seller"){
            return next();
        }
        return res.redirect("/login")
}

app.post("/login", [verifyUser, isSeller], (req, res)=>{
    res.send("seller logged in successfully and profile displayed")
})


//application level middleware
app.use(verifyUser)


//route level middleware
app.use("/user", verifyUser)