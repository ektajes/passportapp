var express=require('express');
var path=require('path');
var expressValidator=require('express-validator');
var session=require('express-session');
var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
var flash=require('connect-flash');
var bodyParser=require('body-parser');
var routes=require('./routes/index');
var users=require('./routes/users');

var app=express();

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//set static folder

app.use(express.static(path.join(__dirname,'pubic')));

//get static folder
app.use('/css', express.static(__dirname+'/node_modules/bootstrap/dist/css'));

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//express-session middleware

/*app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))*/
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//express-validator middleware
/*app.use(expressValidator({
  errorFormatter:function(param, msg, value){
    var namespace=param.split('.');
    root=namespace.shift(),
    formParam=root;
    while(namespace.length){
      formParam+= '['+namespace.shift() +']';

    }
    return{
      param:formPram,
      msg:msg,
      value:value
    }
  }
  }));*/
  /*const { check, validationResult } = require('express-validator');
app.post('/finished', function (req, res) {
let email = req.body.email

check('email', 'Email required').isEmail()

var errors = validationResult(req)
if (errors) {
  req.session.errors = errors
  req.session.success = false
  res.redirect('/email-adress')
  } else {
  req.session.success = true
  res.redirect('/finished')
  }
})*/
//express-validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));




  //connect-flash middleware
  app.use(flash());

  //express-messages middleware
  
  app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    next();
  });


  app.get('*', function(req, res, next){
    res.locals.user = req.user || null;
    next();
});

// Define Routes
app.use('/', routes);
app.use('/users', users);

app.listen(3000);
console.log('Server started on port 3000');
//Define routes



