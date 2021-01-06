const MongoClient=require('mongodb').MongoClient;
//connection url
const url='mongodb://localhost:27017/myproject-1';
MongoClient.connect(url, {useNewUrlParser:true, useUnifiedTopology:true},function(err,client){
  if(err){
    return console.dir(err);
  }
  var db=client.db('myproject-1');
  console.log('connected to mongodb');
 /*InsertDocument(db,function(){
   client.close();
 });*/
 /*InsertDocuments(db,function(){
  client.close();*/
 FindDocuments(db,function(){
  client.close();
 /* QueryDocuments(db,function(){
    client.close();*/
    /*UpdateDocument(db,function(){
      client.close();*/
     /* RemoveDocument(db,function(){
      client.close();*/
});

});

//Insert single doc
/*const InsertDocument= function(db,callback){
  //get collection
 const collection= db.collection('users');
//inser docs
collection.insert({
  name:'Brad Traversy',
  email:'brad@test.com'
}, function(err,result){
console.log('inserted document');
console.log(result);
callback(result);
})
}*/

const InsertDocuments= function(db,callback){
  //get collection
 const collection= db.collection('users');
//inser docs
collection.insertMany([
{
  name:'Brad Traversy',
  email:'brad@test.com'
},
{
  name:'Trace Traversy',
  email:'brad@test.com'
},
{
  name:'Yan Traversy',
  email:'brad@test.com'
}
]
  
, function(err,result){
console.log('inserted document');
console.log(result);
callback(result);
});
}

//Find documents
const FindDocuments= function(db,callback){
  //get collection
 const collection= db.collection('users');
 collection.find({}).toArray(function(err,docs){
if(err){
  return console.dir(err);
}
console.log('found document');
console.log(docs);
callback(docs);
 })
}



/*const QueryDocuments= function(db,callback){
  //get collection
 const collection= db.collection('users');
 collection.find({'name':'Brad Traversy'}).toArray(function(err,docs){
if(err){
  return console.dir(err);
}
console.log('found document');
console.log(docs);
callback(docs);
 })
}*/

/*const UpdateDocument= function(db,callback){
  //get collection
 const collection= db.collection('users');
 collection.updateOne({name:'Brad Traversy'},{$set:{email:'BRADD@test.com'}},function(err,result){

if(err){
  return console.dir(err);
}
console.log('updated document');
console.log(result);
callback(result);
 })
}*/

//Remove document

/*const RemoveDocument= function(db,callback){
  //get collection
 const collection= db.collection('users');
 collection.deleteOne({name:'Yan Traversy'},function(err,result){

if(err){
  return console.dir(err);
}
console.log('updated document');
console.log(result);
callback(result);
 })
};*/