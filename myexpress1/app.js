var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');
var port=3001;

//var pug=require('pug');

var app=express();

//app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(function(req,res,next){
  console.log('Time:', Date.now());
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

/*app.get('/',function(req,res){
  res.send('Hello world');
});*/

app.get('/about', function(req,res){
  res.render('about');
});

app.get('/', function(req,res){
  res.render('index',{
    title:'Hello world',
    showTitle: true,
    people:['John', 'Steve', 'Jose']
  });
});
app.listen(port);
console.log('server started on port'+port);

module.exports=app;

app.use(express.static(path.join(__dirname,'public')));