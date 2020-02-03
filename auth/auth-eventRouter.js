const router = require('express').Router();
const Auth = require('./auth-model.js');
const Event = require('../events/events-model.js');

router.post('/', (req, res) => {
    Auth.addEvent(req.body)
    .then(event => {
        res.status(201).json(event)
    })
    .catch(err => {
        res.status(500).json({message: 'error adding event'})
    })
})

router.put('/:id', (req, res) => {
    Auth.updateEvent(req.params.id, req.body)
    .then(event => {
        if(event) {
            res.status(200).json({message: 'Event was successfully updated'});
        } else {
            res.status(404).json({message: 'Event could not be found'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Error updating event'})
    })
})

router.delete('/:id', (req, res) => {
    Auth.removeEvent(req.params.id)
    .then(count => {
        if(count > 0) {
            res.status(200).json({message: 'Event has been deleted'})
        } else {
            res.status(404).json({message: 'Event could not be found'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Error removing event'})
    })
})

router.get('/:id', (req, res) => {
    const user = req.session.userId;
    const id = req.params.id;
    req.body = {user_id: user, event_id: id} 
    Event.findEventById(id)
    .then(event => {
        if(event.length > 0) {
            Auth.addUserToEvent(req.body).then(user => {
                res.status(200).json({message: 'user was added to event'})
            })
        } else {
            res.status(404).json({message: 'event not found'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Error adding user to event'})
    })
})

module.exports = router