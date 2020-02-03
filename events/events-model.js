const db = require('../data/dbConfig.js');

module.exports = {
    attendanceCount,
    findEvents,
    findEventById
}

function attendanceCount(id){
    return db('users_events').count('user_id as attendees').where('event_id', id)
}

function findEvents() {
    return db('events')
}

function findEventById(id){
    return db('events').where({id})
}
