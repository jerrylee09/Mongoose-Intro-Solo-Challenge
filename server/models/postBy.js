var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// subdocument
var postBySchema = new Schema({
  content: { type: String, required: true },
});

var postBy = mongoose.model('postBy', postBySchema);

module.exports = postBy;
