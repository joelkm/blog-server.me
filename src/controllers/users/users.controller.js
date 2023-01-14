const { getAllUsers,
    addNewUser, 
    existsUserWithId,
    deletedUserById} = require('../../models/users.model');

function httpGetAllUsers(req, res) {
    return res.status(200).json(getAllUsers());
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
    
    if(!existsUserWithId(userId))
    return res.status(404).json({
        error: 'user not found'
    });

    const deleted = deletedUserById(userId);
    return res.status(200).json(deleted);
}

module.exports = {
    httpGetAllUsers,
    httpAddNewUser,
    httpDeleteUser
}