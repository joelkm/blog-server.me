const { addNewComment,
    editCommentById,
    deleteCommentById
} = require('../../models/comments/comments.model');

const {getUserById} =require('../../models/users/users.model');

const {getBlogById} =require('../../models/blogs/blogs.model');

async function httpAddNewComment(req, res) {
    const comment = req.body;

    if(!comment.content || !comment.userId || !comment.blogId) {
        return res.status(400).json({
            error: 'Missing required comment property'
        });
    }
    if(!(await getUserById(comment.userId))) {
        return res.status(400).json({
            error: 'User not registered'
        });
    }
    if(!(await getBlogById(comment.blogId))) {
        return res.status(400).json({
            error: 'Blog not registered'
        });
    }

    const newComment = await addNewComment(comment)
    return res.status(201).json(newComment);
}

async function httpEditComment(req, res) {
    const commentId = req.params.id;
    const newCommentInfo = req.body;

    if(newCommentInfo.userId) {
        queryUserId = await getUserById(newCommentInfo.userId)
        if(queryUserId.length == 0){
            return res.status(400).json({
                error: 'User not registered'
            });
        }
    }

    if(newCommentInfo.blogId) {
        queryBlogId = await getBlogById(newCommentInfo.blogId)
        if(queryBlogId.length == 0){
            return res.status(400).json({
                error: 'Blog not registered'
            });
        }
    }

    editResult = await editCommentById(commentId, newCommentInfo)

    if(!editResult) {
        return res.status(400).json({
            error: 'Nothing was edited'
        });
    }

    return res.status(200).json({
        Result: "Succesfully edited"
    });
}

async function httpDeleteComment(req, res) {
    const commentId = req.params.id;

    const deleteResult = await deleteCommentById(commentId);

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
    httpAddNewComment,
    httpEditComment,
    httpDeleteComment
}