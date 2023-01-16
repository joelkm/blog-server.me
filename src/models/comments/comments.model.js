const comments = require('./comments.mongo');

async function addNewComment (comment) {
    try {
        const newComment = await comments.create({
            userId: comment.userId,
            content: comment.content,
            blogId: comment.blogId
        })
        return newComment;
    } catch(err) {
        console.error(`Could not add comment: ${err}`);
    }
}

async function editCommentById (commentId ,newCommentInfo) {
    try {
        editedComment = await comments.findByIdAndUpdate({_id: commentId},{"userId": newCommentInfo.userId, "content": newCommentInfo.content, "blogId": newCommentInfo.blogId});
        return editedComment;
    } catch (err) {
        console.error(`Could not edit comment: ${err}`);
    }
}

async function deleteCommentById (commentId) {
    try {
        deletedComment = await comments.deleteOne({_id: commentId});
        return deletedComment;
    } catch(err) {
        console.error(`Could not delete the comment: ${err}`);
    }
}

async function getCommentsFromUser (usrId) {
    try {
        return await comments.find({userId: usrId}, 'userId content blogId');
    } catch (err) {
        console.error(`Could not find comments from the user: ${err}`);
    }
}

async function getCommentsFromBlog (blId) {
    try {
        return await comments.find({blogId: blId}, 'userId content blogId');
    } catch (err) {
        console.error(`Could not find comments in the blog: ${err}`);
    }
}

module.exports = {
    addNewComment,
    editCommentById,
    deleteCommentById,
    getCommentsFromUser,
    getCommentsFromBlog
}