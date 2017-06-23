var mongoose = require('mongoose');
var User = mongoose.model('User');
mongoose.Promise = global.Promise;
module.exports = {
  show: function(req, res){
    User.findOne({name: req.params.name})
    .then((user)=>{
      console.log('db is getting this user',req.params.name);
      res.json({message: "Success", user: user})
    })
    .catch((err)=>{
      res.json({message: "Error", error: err})
    })
  },
  newUser: function(req, res) {
    User.create(req.body, function(err, output){
      if (err) {
        res.json({message: "Error", error: err})
      }
      else {
        res.json({message: "Success", user: output})
      }
    })
  } 
}

