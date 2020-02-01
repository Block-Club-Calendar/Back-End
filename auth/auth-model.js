const db = require('../data/dbConfig.js');

module.exports = {
    findEventById,
    addEvent,
    updateEvent,
    deleteEvent
}

function findEventById(id){
    return db('events').where({id}).select('id', 'eventTitle')
}

function addEvent(event){
    return db('events').insert(event, 'id').then(([id]) => {return findEventById(id)});
}

function updateEvent(id, event){
    return db('events').where('id', Number(id)).update(event);
}

function deleteEvent(id){
    return db('events').where('id', Number(id)).del();
}