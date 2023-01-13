const express = require('express');
const {
    httpGetAllComments,
    httpAddNewComment,
    httpDeleteComment
} = require('./comments.controller')

const commentsRouter = express.Router();

commentsRouter.get('/', httpGetAllComments);
commentsRouter.post('/', httpAddNewComment);
commentsRouter.delete('/:id', httpDeleteComment);

module.exports = commentsRouter;