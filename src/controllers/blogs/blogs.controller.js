const { getAllBlogs,
    getBlogById,
    addNewBlog, 
    deleteBlogById} = require('../../models/blogs/blogs.model');

const { getCommentsFromBlog } = require('../../models/comments/comments.model')


function httpGetAllBlogs(req, res) {
    return res.status(200).json(getAllBlogs());
}

function httpGetBlogById(req, res) {
    const blogId = Number(req.body.id);

    return res.status(200).json(getBlogById(blogId))
}

// function httpGetCommentsFromBlog

function httpAddNewBlog(req, res) {
    const blog = req.body;

    if(!blog.title || !blog.content || !blog.authors) {
        return res.status(400).json({
            error: 'Missing required blog property'
        });
    }

    addNewBlog(blog);
    return res.status(201).json(blog);
}


function httpEditBlog(req, res) {
    const blogId = Number(req.body.id);
    const newBlogInfo = req.body.new;

    edited = editBlogById(blogId, newBlogInfo);
    return res.status(200).json(edited);
}

function httpDeleteBlog(req, res) {
    const blogId = Number(req.body.id);

    const deleted = deleteBlogById(blogId);
    return res.status(200).json(deleted);
}

module.exports = {
    httpGetAllBlogs,
    httpGetBlogById,
    httpGetCommentsFromBlog,
    httpAddNewBlog,
    httpEditBlog,
    httpDeleteBlog
}