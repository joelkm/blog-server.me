const { getAllAuthors,
    addNewAuthor, 
    existsAuthorWithId,
    deletedAuthorById} = require('../../models/authors/authors.model');

const { getBlogsFromAuthor } = require('../../models/blogs/blogs.model');

function httpGetAllAuthors(req, res) {
    return res.status(200).json(getAllAuthors());
}

function httpGetBlogsFromAuthor(req, res) {
    return res.status(200).json(getBlogsFromAuthor())
}

function httpAddNewAuthor(req, res) {
    const author = req.body;

    if(!author.name || !author.email) {
        return res.status(400).json({
            error: 'Missing required author property'
        });
    }
    if(author.name.indexOf(' ')<0){
        return res.status(400).json({
            error: 'The full name is required'
        })
    }
    if(author.email.indexOf('@')<0 && author.email.indexOf('.')<0) {
        return res.status(400).json({
            error: 'Invalid email adress'
        })
    }

    addNewAuthor(author);
    return res.status(201).json(author);
}

function httpDeleteAuthor(req, res) {
    const authorId = Number(req.params.id);
    
    if(!existsAuthorWithId(authorId))
    return res.status(404).json({
        error: 'Author not found'
    });

    const deleted = deletedAuthorById(authorId);
    return res.status(200).json(deleted);
}
/* Author's Blogs
function httpGetBlogsFromAuthor(req, res) {
    const blogId = Number(req.body.id);
    
    if(!existsBlogWithId(blogId))
    return res.status(404).json({
        error: 'Blog not found'
    });
    
    te

}
*/
module.exports = {
    httpGetAllAuthors,
    httpGetBlogsFromAuthor,
    httpAddNewAuthor,
    httpDeleteAuthor
}