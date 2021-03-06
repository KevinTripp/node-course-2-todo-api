var express = require('express');
var bodyParser = require('body-parser');
var mongodb  = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/users');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) =>{
    res.status(400).send(e);
  })
});

app.get('/todos',(req, res) =>{
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (e) =>{
    res.status(400).send(e);
  })
});

app.get('/todos/:id', (req, res) =>{
  var id = req.params.id;

  if(!mongodb.ObjectID.isValid(id)){
    return res.status(404).send({error:"Id is not valid"})
  }
  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(404).send({error:"No matching records for that id"});
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send({e})
  });
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!mongodb.ObjectID.isValid(id)){
   return res.status(404).send({error:"Id is not valid"})
  }

  Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo){
      return res.status(404).send({error:"No matching records for that id"});
    }
    res.status(200).send(todo);
  }).catch((e) => res.status(400).send({e}));
});

app.listen(port, () => {
  console.log(`Started server on port ${port}`);
});

module.exports = {app}
;

// var newUser = new User({
//   email: "   kevin.tripp@apdscorporate.com "
// })
//
// newUser.save().then((doc) =>{
//   console.log('saved user', JSON.stringify(doc, undefined, 2));
// }, (e)=>{
//   console.log("unable to save User", e);
// });
