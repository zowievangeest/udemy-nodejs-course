const Todos = require('../models/todoModel');

module.exports = function(app) {

   app.get('/api/setupTodos', function(req, res) {
       const starterTodos = [
           {
               username: 'zowie',
               todo: 'Koop melk',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'zowie',
               todo: 'koop drinken',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'zowie',
               todo: 'Leer VueJS & Node',
               isDone: true,
               hasAttachment: false
           }
       ];
       Todos.create(starterTodos, function(err, results) {
           res.send(results);
       });
   });

}
