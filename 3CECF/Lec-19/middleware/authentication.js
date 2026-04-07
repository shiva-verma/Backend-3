const isLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
        res.redirect("/login")
    }
    next();
}

const isSeller = (req, res, next)=>{
        if(req.user.role === "seller"){
           next();
        }
        res.redirect("/home")
}

module.exports = {isLoggedIn, isSeller}