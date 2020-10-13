const mongoose = require('mongoose');

var schema = mongoose.Schema({
    idno : Number,
    name: String,
    email: String,
    status: String
});

const model =  new mongoose.model('model',
schema, 'collection');

module.exports = model;