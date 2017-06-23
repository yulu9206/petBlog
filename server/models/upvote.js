var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UpvoteSchema = new mongoose.Schema({
 _user: {type: Schema.Types.ObjectId, ref: 'User'},
 _option: {type: Schema.Types.ObjectId, ref: 'Onswer'},
}, {timestamps: true});
mongoose.model('Upvote', UpvoteSchema);