var quotes = require('./../controllers/quotes.js');
var users = require('./../controllers/users.js');
var path = require("path");

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render("index");
  })
  app.post('/new_user', function(req, res) {
    console.log('server routes sending new user to db', req.body);
    users.newUser(req, res);
  })
  // app.get('/friends/:id', function(req, res){
    
  //   friends.show(req, res);
  // });

  // app.post('/friends', function(req, res){
  //   friends.create(req, res);
  // });

  // app.put('/friends/:id', function(req, res){
  //   friends.update(req, res);
  // });

  // app.delete('/friends/:id', function(req, res){
  //   friends.delete(req, res);
  // });

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('public/dist/index.html'));
    });  
}


