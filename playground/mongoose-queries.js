const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

var id = '5c3f1cdd0ab13868045ffd09'

User.findById(id).then((user) => {
  if(!user){
    return console.log('ID not found')
  }
  console.log('User by id', user)
}).catch((e) => console.log(e));

// var id = '5c4e36af2f93c828282e5a6a1';

// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//    _id: id
//  }).then((todos)=>{
//    console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by id', todo)
// }).catch((e) => console.log(e));
