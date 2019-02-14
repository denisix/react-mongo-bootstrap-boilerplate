const mongoose = require('mongoose');

var testSchema = new mongoose.Schema({
  foo: String,
});

module.exports = mongoose.model('Test', testSchema);
