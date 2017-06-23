var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');

mongoose.Promise = global.Promise;
module.exports = {
  showAll: function(req, res) {
    Topic.find({}, function(err, topics) {
      if(err){
        res.json({message: "Error", error: err});
      }
      else{
        res.json({message: "Success", topics: topics}); 
        // topics.map((topic)=>
        //   User.findOne({_id: topic._author}, function(err, author){
        //     if(err) {
        //         console.log(err);
        //     } else {
        //         topic.author = author;
        //     }
        //   });
        // );
      }       
    }).sort({ topic: -1 });;
  },
  // 'asc' 
  // create: function(req, res) {
  //   var topic = new Topic(req.body);
  //   Topic.create(req.body, function(err, output){
  //     if (err) {
  //       res.json({message: "Error", error: err})
  //     }
  //     else {
  //       res.json({message: "Success", topic: output})
  //     }
  //   })
  // }, 
  create: function(req, res) {  
    User.findOne({_id: req.body._author}, function(err, author){
        var topic = new Topic(req.body);
        author.topics.push(topic);
        topic.save(function(err){
          author.save(function(err){
              if(err) {
                  res.json({message: "Error", error: err});
              } else {
                  res.json({message: "Success", author: author});
              }
          });
       });
    });
  },
  show: function(req, res){
    console.log('db is trying to find topic',req.params.id)
    Topic.findOne({_id: req.params.id})
    .then((topic)=>{
      console.log('db find topic', topic);
      res.json({message: "Success", topic: topic})
    })
    .catch((err)=>{
      res.json({message: "Error", error: err})
    })
  },
  update: function(req, res){
    Topic.update({ _id: req.body._id }, req.body, function (err,output) {
      if (err) {
        res.json({message: "Error", error:err})
      }
      else {
        res.json({message: "Success", topic:output})
      }
    });
  },
  delete: function(req, res){
    Topic.remove({_id: req.params.id})
    .then((data)=>{
      res.json({message: "Success"})
    })
    .catch((err)=>{
      res.json({message: "Error", error: err})
    })
  },
}


