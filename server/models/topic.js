var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TopicSchema = new mongoose.Schema({
 topic: {type: String, required: true},
 desc: {type: String},
 catg: {type: String},
 _author: {type: Schema.Types.ObjectId, ref: 'Author'},
 answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
}, {timestamps: true});
 
mongoose.model('Topic', TopicSchema);


// var Schema = mongoose.Schema;
// var postSchema = new mongoose.Schema({
//  text: { type: String, required: true }, 
//  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
// }, { timestamps: true });

// var commentSchema = new mongoose.Schema({
//  // since this is a reference to a different document, the _ is the naming convention!
//  _post: {type: Schema.Types.ObjectId, ref: 'Post'},
//  text: { type: String, required: true },
// }, {timestamps: true });

// app.get('/posts/:id', function (req, res){
// // the populate method is what grabs all of the comments using their IDs stored in the 
// // comment property array of the post document!
//  Post.findOne({_id: req.params.id})
//  .populate('comments')
//  .exec(function(err, post) {
//       res.render('post', {post: post});
//         });
// });

//  //  just a sample route.  Post request to update a post.
//  //  your routes will probably look different.
//  app.post('/posts/:id', function (req, res){
//     Post.findOne({_id: req.params.id}, function(err, post){
//         // data from form on the front end
//         var comment = new Comment(req.body);
//         //  set the reference like this:
//         comment._post = post._id;
//         // now save both to the DB
//         comment.save(function(err){
//                 post.comments.push(comment);
//                 post.save(function(err){
//                      if(err) {
//                           console.log('Error');
//                      } else {
//                           res.redirect('/');
//                      }
//                  });
//          });
//     });
//  });