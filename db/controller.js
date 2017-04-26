var msgModel = require('./model');

function findAll(callback) {
  msgModel.find({}, callback);
}

function findOne(id, callback) {
  msgModel.find({id: id}, callback);
}

function findByName(name, callback) {
  msgModel.find({name: name}, callback);
}

function saveMessage(message, callback) {
  msgModel.create(message, callback);
}

exports.findOne = findOne;
exports.findByName = findByName;
exports.findAll = findAll;
exports.saveMessage = saveMessage;