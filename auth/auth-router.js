const router = require('express').Router();
const Event = require('./auth-model.js');

router.post('/', (req, res) => {
    Event.addEvent(req.body)
    .then(event => {
        res.status(201).json(event)
    })
    .catch(err => {
        res.status(500).json({message: 'error adding event'})
    })
})

router.put('/:id', (req, res) => {
    Event.updateEvent(req.params.id, req.body)
    .then(event => {
        if(event) {
            res.status(200).json(hub);
        } else {
            res.status(404).json({message: 'Event could not be found'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Error updating event'})
    })
})

router.delete('/:id', (req, res) => {
    Event.removeEvent(req.params.id)
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

module.exports = router