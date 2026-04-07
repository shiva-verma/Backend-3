const isLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
        res.redirect("/login")
    }
    next();
}

const isSeller = (req, res, next)=>{
    if(req.user.usertype === "seller"){
        next();
    }
    res.redirect("/products")
}

module.exports = {isLoggedIn, isSeller}

