const express = require('express');
const router = express.Router();

router.get('/register', (req, res)=> {
    res.render('register.ejs');
});
router.post('/signup',(req,res)=>{
    console.log(req.body);
    res.send('data shared successfully');
})
module.exports = router;