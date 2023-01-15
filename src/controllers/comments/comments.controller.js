const { addNewComment,
    editComment,
    deleteComment
} = require('../../models/comments/comments.model');

function httpAddNewComment(req, res) {
    const comment = req.body;

    if(!comment.content || !comment.userId || !comment.blogId) {
        return res.status(400).json({
            error: 'Missing required comment property'
        });
    }

    addNewComment(comment);
    return res.status(201).json(comment);
}

function httpEditComment(req, res) {
    const commentId = Number(req.body.id);
    const newCommentInfo = req.body.new;

    edited = editCommentById(commentId, newCommentInfo);
    return res.status(200).json(edited);
}

function httpDeleteComment(req, res) {
    const commentId = Number(req.body.id);

    const deleted = deleteCommentById(commentId);
    return res.status(200).json(deleted);
}

module.exports = {
    httpAddNewComment,
    httpEditComment,
    httpDeleteComment
}