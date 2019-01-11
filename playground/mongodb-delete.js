// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result) =>{
  //   console.log(result);
  // })

  // db.collection('users').deleteOne({text:'eat lunch'}).then((result) =>{
  //   console.log(result);
  // })

  db.collection('Users').deleteMany({name:"Kevin"}).then((result)=>{
    console.log(result);
  })

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5c34947ce70cd6356cef5928")}).then((results) =>{
    console.log(JSON.stringify(results, undefined,2));
  })

  // db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
  //   console.log(result);
  // })

  // client.close();
});
