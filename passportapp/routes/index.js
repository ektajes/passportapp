var express=reqiure('express');
var router=express.Router();

router.get('/', function(req,res){
  res.send('Index');

});

module.exports=router;


