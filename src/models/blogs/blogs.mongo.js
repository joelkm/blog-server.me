const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
    title: String,
    content: String,
    authorsIds: [String],
    viewCount: Number,
    likeCount: Number
});

module.exports = mongoose.model('blog', blogsSchema);