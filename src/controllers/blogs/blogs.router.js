const express = require('express');
const {
    httpGetAllBlogs,
    httpAddNewBlog,
    httpDeleteBlog
} = require('./blogs.controller')

const blogsRouter = express.Router();

blogsRouter.get('/', httpGetAllBlogs);
blogsRouter.post('/', httpAddNewBlog);
blogsRouter.delete('/:id', httpDeleteBlog);

module.exports = blogsRouter;