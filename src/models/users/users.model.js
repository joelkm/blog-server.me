const users = require('./users.mongo');

async function getAllUsers() {
    return await users.find({}, 'name email');
}

async function getUserById(userId) {
    try {
        return await users.findById({_id: userId}, 'name email')
    } catch (err) {
        console.error(`Could not find the user: ${err}`)
    }
} 

async function addNewUser(user) {
    try {
        const newUser = await users.create({
            name: user.name,
            email: user.email
        })
        return newUser;
    } catch(err) {
        console.error(`Could not add user: ${err}`);
    }
}

async function deleteUserById(userId) {
    try {
        deletedUser = await users.deleteOne({_id: userId});
        return deletedUser;
    } catch(err) {
        console.error(`Could not delete the user: ${err}`);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    addNewUser,
    deleteUserById
}