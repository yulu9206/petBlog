var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
//  _id: {type: String, required: true},
 name: {type: String, required: true},
 topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
 options: [{type: Schema.Types.ObjectId, ref: 'Option'}],
 upvotes: [{type: Schema.Types.ObjectId, ref: 'Upvote'}],
}, {timestamps: true});
mongoose.model('User', UserSchema);


