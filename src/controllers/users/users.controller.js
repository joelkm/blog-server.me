const { getAllUsers,
    getUserById,
    addNewUser,
    deleteUserById} = require('../../models/users/users.model');

const { getCommentsFromUser } = require('../../models/comments/comments.model')

function httpGetAllUsers(req, res) {
    return res.status(200).json(getAllUsers());
}

function httpGetUserById (req, res) {
    const userId = Number(req.body.id);

    return res.status(200).json(getUserById(userId));
}

function httpGetCommentsFromUser (req, res){
    const userId = Number(req.body.userId);

    return res.status(200).json(getCommentsFromUser(userId));
}

function httpAddNewUser(req, res) {
    const user = req.body;

    if(!user.name || !user.email) {
        return res.status(400).json({
            error: 'Missing required user property'
        });
    }
    if(user.name.indexOf(' ')<0){
        return res.status(400).json({
            error: 'The full name is required'
        })
    }
    if(user.email.indexOf('@')<0 && user.email.indexOf('.')<0) {
        return res.status(400).json({
            error: 'Invalid email adress'
        })
    }

    addNewUser(user);
    return res.status(201).json(user);
}

function httpDeleteUser(req, res) {
    const userId = Number(req.params.id);

    const deleted = deleteUserById(userId);
    return res.status(200).json(deleted);
}

module.exports = {
    httpGetAllUsers,
    httpGetUserById,
    httpGetCommentsFromUser,
    httpAddNewUser,
    httpDeleteUser
}