function verifyUser(req, res, next){
        const data = req.body;
        const email = data.email;
        const password = data.password;

        const userFound = mathchpassword(password);
        if(userFound){
            return next()
        }else{
            return res.send("user not found")
        }
}
function isSeller(req, res, next){
    if(req.user.role == "seller"){
        return next();
    }
    return res.send("logged in as seller")
}

const middlewares = [verifyUser, isSeller]

app.get("/login",[verifyUser, isSeller], (req, res)=>{
        res.send("user loggedIn entered in user profile")
})


//2 types of middleware

//Application level middleware
aap.use(verifyUser)

//route level middleware
app.use("/user", verifyUser)