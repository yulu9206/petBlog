var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AnswerSchema = new mongoose.Schema({
 answers: {type: String, required: true},
 _user: {type: Schema.Types.ObjectId, ref: 'User'},
 _topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
 upvotes: [{type: Schema.Types.ObjectId, ref: 'Upvote'}],
 downvotes: [{type: Schema.Types.ObjectId, ref: 'Downvote'}]
}, {timestamps: true});
mongoose.model('Answer', AnswerSchema);