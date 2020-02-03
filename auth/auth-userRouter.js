const router = require('express').Router();
const Auth = require('./auth-model.js');

router.get('/attending', (req, res) => {
    Auth.findAttendance(req.session.userId)
    .then(events => {
        res.status(200).json(events)
    })
    .catch(err => {
        res.status(500).json({message: 'Error retrieving events'})
    })

})

module.exports = router