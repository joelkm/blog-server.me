const authors = require('./authors.mongo');

async function getAllAuthors() {
    return await authors.find({}, 'name email');
}

async function addNewAuthor(author) {
    try {
        const newAuthor = await authors.create({
            name: author.name,
            email: author.email
        })
        return newAuthor;
    } catch(err) {
        console.error(`Could not add author: ${err}`);
    }
}

async function deleteAuthorById(authorId) {
    try {
        deletedAuthor = await authors.deleteOne({_id: authorId});
        return deletedAuthor;
    } catch(err) {
        console.error(`Could not delete the author: ${err}`);
    }
}

module.exports = {
    getAllAuthors,
    addNewAuthor,
    deleteAuthorById
}