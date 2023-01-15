const authors = require('./authors.mongo');

async function getAllAuthors() {
    try {
        return await authors.find({}, 'name email');
    } catch (err) {
        console.error(`Could not find authors: ${err}`);
    }
}

async function getAuthorById(authorId) {
    try {
        return await authors.find({_id: authorId}, 'name email')
    } catch (err) {
        console.error(`Could not find author: ${err}`);
    }
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
    getAuthorById,
    addNewAuthor,
    deleteAuthorById
}