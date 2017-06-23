var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OptionSchema = new mongoose.Schema({
 option: {type: String, required: true},
 authorName: {type: String, required: true},
 _author: {type: Schema.Types.ObjectId, ref: 'User'},
//  _topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
//  upvotes: [{type: Schema.Types.ObjectId, ref: 'Upvote'}],
 count: {type: Number},
}, {timestamps: true});
mongoose.model('Option', OptionSchema);

