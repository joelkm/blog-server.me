const mongoose = require('mongoose');

const authorsSchema = new mongoose.Schema({
    name: String,
    email: String
});

module.exports = mongoose.model('author', authorsSchema);