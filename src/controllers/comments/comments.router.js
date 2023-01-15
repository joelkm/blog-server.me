const express = require('express');
const {
    httpAddNewComment,
    httpEditComment,
    httpDeleteComment
} = require('./comments.controller')

const commentsRouter = express.Router();

commentsRouter.post('/', httpAddNewComment);
commentsRouter.put('/:id', httpEditComment);
commentsRouter.delete('/:id', httpDeleteComment);

module.exports = commentsRouter;