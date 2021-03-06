'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VotesSchema = new Schema({
  votingLive: Boolean,
  options: [{
    text: String,
    value: Number
  }]
});

//export our module to use in server.js
module.exports = mongoose.model('Vote', VotesSchema);