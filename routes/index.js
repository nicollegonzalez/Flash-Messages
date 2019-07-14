const express = require('express');
const router  = express.Router();




const ensureLogin = require("connect-ensure-login");

/* GET home page */
router.get('/', (req, res, next) => {

  console.log('=-=--=-=--=',req.session)
  console.log('=-=--=-=--=',req.user)

  res.render('index');
});


// router.get('/blah', ensureLogin.ensureLoggedIn('/login') ,(req, res, next)=>{
router.get('/blah',(req, res, next)=>{

  // this is how you can manually add something to req.flash
  // req.flash('error', '*****************Random Word******************')
  // res.redirect('/')

  if(!req.user){
    req.flash('error', "you must be logged in to view the top secret blah plage")
    res.redirect('/login')
  }


  res.render('blah')

})

module.exports = router;