const express = require('express');
const {
    httpGetAllAuthors,
    httpAddNewAuthor,
    httpDeleteAuthor
} = require('./authors.controller')

const authorsRouter = express.Router();

authorsRouter.get('/', httpGetAllAuthors);
authorsRouter.post('/', httpAddNewAuthor);
authorsRouter.delete('/:id', httpDeleteAuthor);

module.exports = authorsRouter;