var express = require('express');
var router = express.Router();

var admin = require('./admin')
var api = require('./api')

router.use('/admin', admin)
router.use('/api', api)

router.all('*', function(req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        var domain = req.headers['referer'].match(/^(\w+:\/\/)?([^\/]+)/i);
        domain = domain ? domain[2].split(':')[0].split('.').slice(-2).join('.') : null;
        console.log('localhost url:' + domain)
        next();
    })

module.exports = router;