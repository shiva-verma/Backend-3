const Review = require("../model/reviewSchema");

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

const isAuthorReview = async(req, res, next)=>{
    //extract reviewId from params
    const reviewId = req.params.rid;
    
    //find review using reviewid
    const review = await Review.findById(reviewId)

    //if review author and current logged in user are same then call next() function
    if(review.author == req.user._id){
        return next();
    }
  return res.send("you are not authorized")
}

module.exports = {isLoggedIn, isSeller, isBuyer, isAuthorReview}

