const { getAllBlogs,
    addNewBlog, 
    existsBlogWithId,
    deleteBlogById} = require('../../models/blogs/blogs.model');


function httpGetAllBlogs(req, res) {
    return res.status(200).json(getAllBlogs());
}
function httpGetBlogById(req, res) {
    if(!existsBlogWithId(blogId))
    return res.status(404).json({
        error: 'Blog not found'
    });

    return res.status(200).json(getBlogById(blogId))
}

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

    if(!existsBlogWithId(blogId))
    return res.status(404).json({
        error: 'Blog not found'
    });

    edited = editBlogById(blogId, newBlogInfo);
    return res.status(200).json(edited);
}

function httpDeleteBlog(req, res) {
    const blogId = Number(req.body.id);
    
    if(!existsBlogWithId(blogId))
    return res.status(404).json({
        error: 'Blog not found'
    });

    const deleted = deleteBlogById(blogId);
    return res.status(200).json(deleted);
}

module.exports = {
    httpGetAllBlogs,
    httpAddNewBlog,
    httpEditBlog,
    httpDeleteBlog
}