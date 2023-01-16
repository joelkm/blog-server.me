const blogs = require('./blogs.mongo');

async function getAllBlogs () {
    try {
        return await blogs.find({}, 'title content authors');
    } catch (err) {
        console.error(`Could not find blogs: ${err}`);
    }
}

async function getBlogById (blogId, visit) {
    try {
        if(visit) {
            await blogs.findByIdAndUpdate({_id: blogId}, {$inc:{viewCount: 1}})
        }
        
        blog = await blogs.findById({_id: blogId}, 'title content authors viewCount likeCount');

        return blog;
    } catch (err) {
        console.error(`Could not find blog: ${err}`);
    }
}

async function addNewBlog (blog) {
    try {
        const newBlog = await blogs.create({
            title: blog.title,
            content: blog.content,
            authorsIds: blog.authorsIds,
            viewCount: 0,
            likeCount: 0
        })
        return newBlog;
    } catch(err) {
        console.error(`Could not add blog: ${err}`);
    }
}

async function editBlogById (blogId, newBlogInfo) {
    try {
        editedBlog = await blogs.findByIdAndUpdate({_id: blogId},{"title": newBlogInfo.title, "content": newBlogInfo.content, "authorsIds": newBlogInfo.authorsIds});
        return editedBlog;
    } catch (err) {
        console.error(`Could not add blog: ${err}`);
    }
}

async function likeBlog(blogId) {
    try {
        blog = await blogs.findByIdAndUpdate({_id: blogId}, {$inc:{likeCount: 1}});
        
        return blog;
    } catch (err) {
        console.error(`Could not find blog: ${err}`);
    }
}

async function deleteBlogById (blogId) {
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
    likeBlog, 
    deleteBlogById,
    getBlogsFromAuthor
}