var mongoose = require('mongoose');
var User = mongoose.model('User');
mongoose.Promise = global.Promise;
module.exports = {
  // show: function(req, res) {
  //   Quote.find({}, function(err, quotes) {
  //     res.render('main', {quotes: quotes});
  //   })
  // },
  newUser: function(req, res) {
    User.create(req.body, function(err, output){
      if (err) {
        res.json({message: "Error", error: err})
      }
      else {
        res.json({message: "Success", friend: output})
      }
    })
  } 
}
