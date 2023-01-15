const { getAllAuthors,
    getAuthorById,
    addNewAuthor, 
    deleteAuthorById} = require('../../models/authors/authors.model');

const { getBlogsFromAuthor } = require('../../models/blogs/blogs.model');

function httpGetAllAuthors(req, res) {
    return res.status(200).json(getAllAuthors());
}

function httpGetAuthorById (req, res) {
    const authorId = Number(req.body.id);

    return res.status(200).json(getAuthorById(authorId));
}

function httpGetBlogsFromAuthor(req, res) {
    const authorId = Number(req.body.authorId);

    return res.status(200).json(getBlogsFromAuthor(authorId));
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

    return res.status(201).json(addNewAuthor(author));
}

function httpDeleteAuthor(req, res) {
    const authorId = Number(req.body.id);

    return res.status(200).json(deleteAuthorById(authorId));
}

module.exports = {
    httpGetAllAuthors,
    httpGetAuthorById,
    httpGetBlogsFromAuthor,
    httpAddNewAuthor,
    httpDeleteAuthor
}