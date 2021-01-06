const MongoClient= require('mongodb').MongoClient;
//connection url
const url= 'mongodb://localhost:27017/myproject';
//connection
//const client = new MongoClient(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true});
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },function(err,client) {
if(err){
  return console.dir(err);
}
var db= client.db('myproject');

console.log('Mongodb connected');

/*InsertDocuments(db, function(){
  client.close();
  });*/
/*
      
       RemoveDocument(db, function(){
          client.close();
          });*/
          
         FindDocuments(db, function(){
            client.close();
            });

});



//Insert Documents
const InsertDocuments= function(db, callback){
  //Getting collections
  const collection=db.collection('users');
  //inserting collection
  collection.insertMany([
    {
      name:'Brad Traversy',
      email:'Brad@someone.com'
       },
       {
        name:'John Issy',
        email:'John@someone.com'
         },
         {
          name:'Jane Traversy',
          email:'Jane@someone.com'
           }
]
  , function(err,result){
    if(err){
      return console.dir(err);
    }
    console.log('Document' +result.ops.length +'inserted');
    console.log(result);
    callback(result);
  });
}



//delete document
const RemoveDocument=function(db,callback){
  const collection=db.collection('users');
  collection.deleteOne({name:'Brad Traversy'},function(err,result){
    if(err){
      return console.dir(err);
    }
    console.log('Removed follwing recored');
   console.log(result);
    callback(result);
    });
  }


  //Find documents
const FindDocuments= function(db, callback){
  //get collection
  const collection=db.collection('users');
  collection.find({}).toArray(function(err, docs){
  if(err){
    return console.dir(err);
  }
  console.log('Found the following records');
  console.log(docs);
  callback(docs)
  });
}