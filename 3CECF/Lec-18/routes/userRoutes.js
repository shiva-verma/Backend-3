const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

router.get('/register', (req, res)=> {
    res.render('register.ejs');
});
router.post('/signup',async(req,res)=>{
    const {username, email, password, phone, role} = req.body;

    const user = new User({username, email, phone, role});

    await User.register(user, password);

    res.send('data saved successfully');
})
module.exports = router;