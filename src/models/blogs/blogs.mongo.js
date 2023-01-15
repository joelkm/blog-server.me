const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
    title: String,
    content: String,
    authorsIds: [String],
});

module.exports = mongoose.model('blog', blogsSchema);