const router = require('express').Router()

const send = require('../controller/controller.js')


// HTTP request
router.post('/send', send)

module.exports = router