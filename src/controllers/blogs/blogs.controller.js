const { getAllBlogs,
    getBlogById,
    addNewBlog,
    editBlogById, 
    likeBlog,
    deleteBlogById} = require('../../models/blogs/blogs.model');

const {getAuthorById} = require('../../models/authors/authors.model')

const { getCommentsFromBlog } = require('../../models/comments/comments.model')


async function httpGetAllBlogs(req, res) {
    const blogs = await getAllBlogs();
    if(blogs.length == 0) {
        return res.status(404).json({
            error: 'No blogs found'
        })
    }
    return res.status(200).json(blogs);
}

async function httpGetBlogById(req, res) {
    const blogId = req.params.id;

    const blog = await getBlogById(blogId, true);
    
    if(blog.length == 0) {
        return res.status(404).json({
            error: 'No blogs found'
        })
    }

    return res.status(200).json(blog)
}

async function httpGetCommentsFromBlog (req, res) {
    const blogId = req.params.id;

    const comments = await getCommentsFromBlog(blogId);
    if(comments.length == 0) {
        return res.status(404).json({
            error: 'No comments found'
        })
    }

    return res.status(200).json(comments);
}

async function httpAddNewBlog(req, res) {
    const blog = req.body;

    if(!blog.title || !blog.content || !blog.authorsIds) {
        return res.status(400).json({
            error: 'Missing required blog property'
        });
    }
    let result = true;
    for (let index = 0; index < blog.authorsIds.length; index++) {
        queryAuthorId = await getAuthorById(blog.authorsIds[index])
        if(queryAuthorId.length == 0) {
            result = false;
        }
    }

    if(!result) {
        return res.status(400).json({
            error: 'Author not registered'
        });
    }
    
    const newBlog = await addNewBlog(blog);
    return res.status(201).json(newBlog);
}


async function httpEditBlog(req, res) {
    const blogId = req.params.id;
    const newBlogInfo = req.body;

    if(newBlogInfo.authorsIds) {
        let result = true;
        for (let index = 0; index < newBlogInfo.authorsIds.length; index++) {
            queryAuthorId = await getAuthorById(newBlogInfo.authorsIds[index])
            if(queryAuthorId.length == 0) {
                result = false;
            }
        }

        if(!result) {
            return res.status(400).json({
                error: 'Author not registered'
            });
        }
    }

    const editResult = await editBlogById(blogId, newBlogInfo)

    if(!editResult) {
        return res.status(400).json({
            error: 'Nothing was edited'
        });
    }

    return res.status(200).json({
        Result: "Succesfully edited"
    });
}

async function httpLikeBlog(req, res) {
    const blogId = req.params.id;

    const likeResult = await likeBlog(blogId);

    if(!likeResult) {
        return res.status(400).json({
            error: 'Like was not submitted'
        });
    }

    return res.status(200).json({
        Result: "Like submitted"
    });
}

async function httpDeleteBlog(req, res) {
    const blogId = req.params.id;

    const deleteResult = await deleteBlogById(blogId);

    if(deleteResult.deletedCount == 0) {
        return res.status(400).json({
            error: 'Nothing was deleted'
        });
    }

    return res.status(200).json({
        Result: "Succesfully deleted"
    });
}

module.exports = {
    httpGetAllBlogs,
    httpGetBlogById,
    httpGetCommentsFromBlog,
    httpAddNewBlog,
    httpEditBlog,
    httpLikeBlog,
    httpDeleteBlog
}