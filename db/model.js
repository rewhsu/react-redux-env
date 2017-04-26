var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
  id: Number,
  message: String,
});

var msgModel = mongoose.model('Messages', messageSchema)

module.exports = msgModel;