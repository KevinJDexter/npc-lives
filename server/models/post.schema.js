const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
  poster: {type: String, require: true},
  post: {type: String, required: true},
  location: {type:String, required: true}
})

module.exports = mongoose.model('posts', postSchema);