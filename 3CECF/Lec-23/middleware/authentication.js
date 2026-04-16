const isLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
        res.redirect("/login")
    }
    next();
}

const isSeller = (req, res, next)=>{
        if(req.user.role === "seller"){
           return next();
        }
        res.redirect("/home")
}

const isBuyer = (req, res, next)=>{
        if(req.user.role === "buyer"){
           return next();
        }
        res.redirect("/home")
}


module.exports = {isLoggedIn, isSeller, isBuyer}