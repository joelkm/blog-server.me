const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
    title: String,
    content: String,
    authors: [String]
});

module.exports = mongoose.model('blog', blogsSchema);