const { getAllUsers,
    getUserById,
    addNewUser,
    deleteUserById} = require('../../models/users/users.model');

const { getCommentsFromUser } = require('../../models/comments/comments.model')

async function httpGetAllUsers(req, res) {
    const users = await getAllUsers()
    
    if(users.length == 0) {
        return res.status(404).json({
            error: 'No users found'
        })
    }

    return res.status(200).json(users);
}

async function httpGetUserById (req, res) {
    const userId = req.params.id;

    const user = await getUserById(userId);
    
    if(user.length == 0) {
        return res.status(404).json({
            error: 'No users found'
        })
    }
    return res.status(200).json(user);
}

async function httpGetCommentsFromUser (req, res){
    const userId = req.params.id;

    const comments = await getCommentsFromUser(userId);
    if(comments.length == 0) {
        return res.status(404).json({
            error: 'No comments found'
        })
    }

    return res.status(200).json(comments);
}

async function httpAddNewUser(req, res) {
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
    if(user.email.indexOf('@')<0 || user.email.indexOf('.')<0) {
        return res.status(400).json({
            error: 'Invalid email adress'
        })
    }

    return res.status(201).json(await addNewUser(user));
}

async function httpDeleteUser(req, res) {
    const userId = req.params.id;
    const deleteResult = await deleteUserById(userId);

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
    httpGetAllUsers,
    httpGetUserById,
    httpGetCommentsFromUser,
    httpAddNewUser,
    httpDeleteUser
}