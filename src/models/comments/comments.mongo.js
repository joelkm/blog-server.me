const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
    userId: String,
    content: String,
    blogId: String
});

module.exports = mongoose.model('comment', commentsSchema);