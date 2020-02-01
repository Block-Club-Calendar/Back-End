const db = require('../data/dbConfig.js');

module.exports = {
    findEvents,
    findEventById
}

function findEvents() {
    return db('events')
}

function findEventById(id){
    return db('events').where({id})
}