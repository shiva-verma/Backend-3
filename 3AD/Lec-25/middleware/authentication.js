const isSeller = (req, res, next)=>{
        if(req.user.role === "seller"){
            return next()
        }
        res.redirect("/products")
}

const isLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
        res.redirect("/products")
    }
    return next();
}

module.exports = {isSeller, isLoggedIn}