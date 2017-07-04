var topics = require('./../controllers/topics.js');
var options = require('./../controllers/options.js');
var users = require('./../controllers/users.js');
var path = require("path");
var petfinder = require('pet-finder-api')('0fd3db5cd208fdb50046dea4be95ccaf','8d259f3d7df67f79d753d139bb1ca7f6');

module.exports = function(app) {
  app.get('/pets', function(req, res){
    petfinder.findPet('95112',options, function(err, pets) {
      if(err){
        res.json({message: "Error", error: err});
        console.log(err);
      }
      else{
        res.json({pets: pets}); 
        console.log(pets);
      }
    });
  }) 

  app.get('/', function(req, res) {
    res.render("index");
  })
  // app.post('/new_user', function(req, res) {
  //   console.log('server routes sending new user to db', req.body);
  //   users.newUser(req, res);
  // })
  app.get('/topics', function(req, res){
    topics.showAll(req, res);
  });  
  // app.get('/users/:name', function(req, res){
  //   console.log('route is getting this user',req.body );
  //   users.show(req, res);
  // });

  app.post('/topics', function(req, res){
    console.log('server routes sending new topic to db', req.body);    
    topics.create(req, res);
  });

  // app.post('/options', function(req, res){
  //   console.log('server routes sending new option to db', req.body);    
  //   options.create(req, res);
  // });

  app.get('/pet/:id', function(req, res){
    var petId = req.params.id;
    petfinder.getPet(petId ,options, function(err, pets) {
      if(err){
        res.json({message: "Error", error: err});
        console.log(err);
      }
      else{
        res.json({pets: pets}); 
        console.log(pets);
      }
    });
  });

  // app.get('/options/:name', function(req, res){
  //   console.log('server is trying to find option', req.body)
  //   options.show(req, res);
  // });

  // app.put('/topics/:id', function(req, res){
  //   topics.update(req, res);
  // });

  // app.put('/options/:name', function(req, res){
  //   console.log('server is trying to update option', req.body);
  //   options.update(req, res);
  // });

  // app.delete('/topics/:id', function(req, res){
  //   topics.delete(req, res);
  // });

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('public/dist/index.html'));
    });  
}


  // app.get('/topics', function(req, res){
  //   topics.index(req, res);
  // });



  // app.post('/friends', function(req, res){
  //   friends.create(req, res);
  // });

  // app.put('/friends/:id', function(req, res){
  //   friends.update(req, res);
  // });

  // app.delete('/friends/:id', function(req, res){
  //   topics.delete(req, res);
  // });

  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve('public/dist/index.html'));
  //   }); 