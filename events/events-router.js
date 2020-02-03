const router = require('express').Router();
const Event = require('./events-model.js');

router.get('/', (req, res) => {
    Event.findEvents()
    .then(events => {
        res.status(200).json(events)
    })
    .catch(err => {
        res.status(500).json({message: 'Error retrieving events'})
    })
})

router.get('/:id', (req, res) => {
    Event.findEventById(req.params.id)
    .then(event => {
        if(event.length > 0) {
            res.status(200).json(event)
        } else {
            res.status(404).json({message: 'Event not found'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Error retrieving event'})
    })
})

router.get('/attendance/:id', (req, res) => {
    Event.findEventById(req.params.id)
    .then(event => {
        if(event.length > 0) {
            Event.attendanceCount(req.params.id)
            .then(count => {
                res.status(200).json(count)
            })
        } else {
            res.status(404).json({message: 'Event not found'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Error retrieving attendance'})
    })
})

module.exports = router