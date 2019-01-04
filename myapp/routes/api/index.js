var express = require('express');
var router = express.Router();

var users = require('./users')
var login = require('./login')
var register = require('./register')

router.use('/users', users)
router.use('/login', login)
router.use('/register', register)

module.exports = router;