const { getAllBlogs,
    getBlogById,
    addNewBlog,
    editBlogById, 
    deleteBlogById} = require('../../models/blogs/blogs.model');

const {getAuthorById} = require('../../models/authors/authors.model')

const { getCommentsFromBlog } = require('../../models/comments/comments.model')


function httpGetAllBlogs(req, res) {
    return res.status(200).json(getAllBlogs());
}

function httpGetBlogById(req, res) {
    const blogId = Number(req.body.id);

    return res.status(200).json(getBlogById(blogId))
}

function httpGetCommentsFromBlog (req, res) {
    const blogId = Number(req.body.blogId);

    return res.status(200).json(getCommentsFromBlog(blogId));
}

function httpAddNewBlog(req, res) {
    const blog = req.body;

    if(!blog.title || !blog.content || !blog.authorsIds) {
        return res.status(400).json({
            error: 'Missing required blog property'
        });
    }
    if(authorsIds.forEach(e => {
        getAuthorById(e);
    }) != null) {
        const newBlog = addNewBlog(blog);
        return res.status(201).json(newBlog);
    } else {
        return res.status(400).json({
            error: 'Author not registered'
        });
    }
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