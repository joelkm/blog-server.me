const mongoose = require('mongoose');

const employeesSchema = new mongoose.Schema({
    name: String,
    email: String
});

module.exports = mongoose.model('author', authorsSchema);