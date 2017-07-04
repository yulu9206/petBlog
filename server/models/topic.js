var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var TopicSchema = new mongoose.Schema({
 topic: {type: String, required: true},
 authorName: {type: String},
//  optonIds: [{type: Schema.Types.ObjectId, ref: 'Option'}],
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
