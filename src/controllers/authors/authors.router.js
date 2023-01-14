const express = require('express');
const {
    httpGetAllAuthors,
    httpGetBlogsFromAuthor,
    httpAddNewAuthor,
    httpDeleteAuthor
} = require('./authors.controller')

const authorsRouter = express.Router();

authorsRouter.get('/', httpGetAllAuthors);
authorsRouter.get('/:id/blogs', httpGetBlogsFromAuthor);
authorsRouter.post('/', httpAddNewAuthor);
authorsRouter.delete('/:id', httpDeleteAuthor);

module.exports = authorsRouter;