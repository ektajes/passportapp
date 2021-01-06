var express=reqiure('express');
var router=express.Router();
//login-page//GET
router.get('/login', function(req,res){
  res.send('Login');

});
//Register-page-GET

router.get('/register', function(req,res){
  res.send('Register');

});

module.exports=router;