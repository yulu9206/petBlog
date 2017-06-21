var mongoose = require('mongoose');
var QuoteSchema = new mongoose.Schema({
 content: {type: String},
}, {timestamps: true});
mongoose.model('Quote', QuoteSchema);


