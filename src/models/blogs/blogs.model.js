const blogs = require('./blogs.mongo');

async function getAllBlogs () {
    try {
        return await blogs.find({}, 'title content authors');
    } catch (err) {
        console.error(`Could not find blogs: ${err}`);
    }
}

async function getBlogById (blogId) {
    try {
        return await blogs.find({_id: blogId}, 'title content authors');
    } catch (err) {
        console.error(`Could not find blog: ${err}`);
    }
}

async function addNewBlog (blog) {
    try {
        const newBlog = await blogs.create({
            title: blog.title,
            content: blog.content,
            authorsIds: blog.authorsIds
        })
        return newBlog;
    } catch(err) {
        console.error(`Could not add blog: ${err}`);
    }
}

async function editBlogById (blogId, newBlogInfo) {
    try {
        editedBlog = await blogs.findByIdAndUpdate({blogId},{"title": newBlogInfo.title, "content": newBlogInfo.content, "authorsIds": newBlogInfo.authorsIds});
        return editedBlog;
    } catch (err) {
        console.error(`Could not add blog: ${err}`);
    }
}

async function deleteBlogById () {
    try {
        deletedBlog = await blogs.deleteOne({_id: blogId});
        return deletedBlog;
    } catch(err) {
        console.error(`Could not delete the blog: ${err}`);
    }
}

async function getBlogsFromAuthor (authorId) {
    try {
        return await blogs.find({authorsIds: authorId}, 'title content authorsIds');
    } catch (err) {
        console.error(`Could not find blog from the author: ${err}`);
    }
}

module.exports = { 
    getAllBlogs,
    getBlogById,
    addNewBlog,
    editBlogById, 
    deleteBlogById,
    getBlogsFromAuthor
}