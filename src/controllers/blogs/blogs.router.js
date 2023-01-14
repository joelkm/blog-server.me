const express = require('express');
const {
    httpGetAllBlogs,
    httpGetBlogById,
    httpGetCommentsFromBlog,
    httpAddNewBlog,
    httpEditBlog,
    httpDeleteBlog
} = require('./blogs.controller')

const blogsRouter = express.Router();

blogsRouter.get('/', httpGetAllBlogs);
blogsRouter.get('/:id', httpGetBlogById);
blogsRouter.get('/:id/comments', httpGetCommentsFromBlog);
blogsRouter.post('/', httpAddNewBlog);
blogsRouter.put('/:id', httpEditBlog)
blogsRouter.delete('/:id', httpDeleteBlog);

module.exports = blogsRouter;