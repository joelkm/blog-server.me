const express = require('express');
const {
    httpGetAllUsers,
    httpGetUserById,
    httpGetCommentsFromUser,
    httpAddNewUser,
    httpDeleteUser
} = require('./users.controller');

const usersRouter = express.Router();

usersRouter.get('/', httpGetAllUsers);
usersRouter.get('/:id', httpGetUserById);
usersRouter.get('/:id/comments', httpGetCommentsFromUser);
usersRouter.post('/', httpAddNewUser);
usersRouter.delete('/:id', httpDeleteUser);

module.exports = usersRouter;