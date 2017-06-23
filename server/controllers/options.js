var mongoose = require('mongoose');
var Option = mongoose.model('Option');
var User = mongoose.model('User');

mongoose.Promise = global.Promise;
module.exports = {
  showAll: function(req, res) {
    Option.find({}, function(err, options) {
      if(err){
        res.json({message: "Error", error: err});
      }
      else{
        res.json({message: "Success", options: options}); 
        // options.map((option)=>
        //   User.findOne({_id: option._author}, function(err, author){
        //     if(err) {
        //         console.log(err);
        //     } else {
        //         option.author = author;
        //     }
        //   });
        // );
      }       
    }).sort({ option: -1 });;
  },
  // 'asc' 
  create: function(req, res) {
    // var option = new Option(req.body);
    Option.create(req.body, function(err, output){
      if (err) {
        res.json({message: "Error", error: err})
      }
      else {
        res.json({message: "Success", option: output})
      }
    })
  }, 
  // create: function(req, res) {  
  //   User.findOne({_id: req.body._author}, function(err, author){
  //       var option = new Option(req.body);
  //       author.options.push(option);
  //       option.save(function(err){
  //         author.save(function(err){
  //             if(err) {
  //                 res.json({message: "Error", error: err});
  //             } else {
  //                 res.json({message: "Success", author: author});
  //             }
  //         });
  //      });
  //   });
  // },
  show: function(req, res){
    console.log('db is trying to find option',req.params.name)
    Option.findOne({option: req.params.name})
    .then((option)=>{
      console.log('db find option', option);
      res.json({message: "Success", option: option})
    })
    .catch((err)=>{
      res.json({message: "Error", error: err})
    })
  },
  update: function(req, res){
    Option.update({ option: req.body.option }, req.body, function (err,output) {
      if (err) {
        res.json({message: "Error", error:err})
      }
      else {
        res.json({message: "Success", option:output})
      }
    });
  },
  delete: function(req, res){
    Option.remove({_id: req.params.id})
    .then((data)=>{
      res.json({message: "Success"})
    })
    .catch((err)=>{
      res.json({message: "Error", error: err})
    })
  },
}


