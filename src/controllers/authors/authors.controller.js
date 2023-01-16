const { getAllAuthors,
    getAuthorById,
    addNewAuthor, 
    deleteAuthorById} = require('../../models/authors/authors.model');

const { getBlogsFromAuthor } = require('../../models/blogs/blogs.model');

async function httpGetAllAuthors(req, res) {
    
    const authors = await getAllAuthors();
    if(authors.length == 0) {
        return res.status(404).json({
            error: 'No authors found'
        })
    }

    return res.status(200).json(authors);
}

async function httpGetAuthorById (req, res) {
    const authorId = req.params.id;

    const author = await getAuthorById(authorId);
    
    if(author.length == 0) {
        return res.status(404).json({
            error: 'No authors found'
        })
    }

    return res.status(200).json(author);
}

async function httpGetBlogsFromAuthor(req, res) {
    const authorId = req.params.id;

    const blogs = await getBlogsFromAuthor(authorId);
    if(blogs.length == 0) {
        return res.status(404).json({
            error: 'No blogs found'
        })
    }
    return res.status(200).json(blogs);
}

async function httpAddNewAuthor(req, res) {
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
    if(author.email.indexOf('@')<0 || author.email.indexOf('.')<0) {
        return res.status(400).json({
            error: 'Invalid email adress'
        })
    }

    return res.status(201).json(await addNewAuthor(author));
}

async function httpDeleteAuthor(req, res) {
    const authorId = req.params.id;

    const deleteResult = await deleteAuthorById(authorId)

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
    httpGetAllAuthors,
    httpGetAuthorById,
    httpGetBlogsFromAuthor,
    httpAddNewAuthor,
    httpDeleteAuthor
}