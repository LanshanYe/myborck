var express = require('express');
var router = express.Router();

var admin = require('./admin')
var api = require('./api')

router.use('/admin', admin)
router.use('/api', api)

module.exports = router;