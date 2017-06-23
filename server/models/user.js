var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
//  _id: {type: String, required: true},
 name: {type: String, required: true},
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
 topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
 answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
 upvotes: [{type: Schema.Types.ObjectId, ref: 'Upvote'}],
 downvotes: [{type: Schema.Types.ObjectId, ref: 'Downvote'}]
}, {timestamps: true});
mongoose.model('User', UserSchema);


