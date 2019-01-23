var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/users');

var app = express();

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

app.listen(3000, () => {
  console.log('Started server on port 3000');
});




// var newUser = new User({
//   email: "   kevin.tripp@apdscorporate.com "
// })
//
// newUser.save().then((doc) =>{
//   console.log('saved user', JSON.stringify(doc, undefined, 2));
// }, (e)=>{
//   console.log("unable to save User", e);
// });
