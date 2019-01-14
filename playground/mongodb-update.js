// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result) =>{
  //   console.log(result);
  // })

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5c3883c123894eaa939e6127")
  // }, {
  //   $set: {
  //     completed:true
  //   }
  // }, {
  //   returnOriginal:false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c3c7961bd4022152498fb5a')
  }, {
    $set: {
      name: "todd"
    },
    $inc: {
      age: 1
    }
  },{
    returnOriginal: false
  }).then((result) =>{
    console.log(result);
  });

  // client.close();
});
