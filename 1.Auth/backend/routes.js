const express = require('express')
const {createUser, loginUser} = require('./controller')

const router = express.Router()
// http
router.post('/signup', createUser)
router.post('/login', loginUser)


module.exports = router