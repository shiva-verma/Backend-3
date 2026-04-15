const isLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
        res.redirect("/login")
    }
    next();
}

const isSeller = (req, res, next)=>{
    if(req.user.usertype === "seller"){
        return next();
    }
    res.redirect("/products")
}

const isBuyer = (req, res, next)=>{
    if(req.user.usertype === "buyer"){
        return next();
    }
    res.redirect("/products")
}

const isOwnReview = (req, res, next)=>{

}

module.exports = {isLoggedIn, isSeller, isBuyer, isOwnReview}

