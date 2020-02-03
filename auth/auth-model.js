const db = require('../data/dbConfig.js');
const User = require('../users/users-model.js');

module.exports = {
    findEventById,
    addEvent,
    updateEvent,
    removeEvent,
    addUserToEvent,
    findAttendance
}

function findEventById(id){
    return db('events').where({id})
}

function addEvent(event){
    return db('events').insert(event, 'id').then(([id]) => {return findEventById(id)});
}

function updateEvent(id, event){
    return db('events').where('id', Number(id)).update(event);
}

function removeEvent(id){
    return db('events').where('id', Number(id)).del();
}

function addUserToEvent(user){
    return db('users_events').insert(user)
}

function findAttendance(user){
    return db('users_events')
    .join('users', 'users_events.user_id', 'users.id')
    .join('events', 'users_events.event_id', 'events.id')
    .select('events.*')
    .where('user_id', user)
}