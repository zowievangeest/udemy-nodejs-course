const Todos = require('../models/todoModel');

module.exports = function(app) {

   app.get('/api/setupTodos', function(req, res) {

       console.log(req);
       console.log(res);
       // seed database
       const starterTodos = [
           {
               username: 'test',
               todo: 'Buy milk',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'test',
               todo: 'Feed dog',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'test',
               todo: 'Learn Node',
               isDone: false,
               hasAttachment: false
           }
       ];
       Todos.create(starterTodos, function(err, results) {
           console.log(err);
           console.log(results);
           res.send(results);
       });
   });

}
