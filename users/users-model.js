const db = require('../data/dbConfig.js');

module.exports = {
    findUserBy,
    addUser
}

function findUserBy(filter){
    return db('users').where(filter).select('id', 'username', 'password').first();
}

function addUser(user){
    return db('users').insert(user, 'id').then(([id]) => {return findUserById(id)})
}

