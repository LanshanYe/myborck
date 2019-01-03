var express = require('express');
var router = express.Router();

router.route('/')
    .all(function(req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        next();
    })
    .get(function(req, res, next) {
        return res.json({
            name: 'zhangyu',
            phone: '13100001111'
        });
    })
    .put(function(req, res, next) {
        // just an example of maybe updating the user
        req.user.name = req.params.name;
        // save user ... etc
        res.json(req.user);
    })
    .post(function(req, res, next) {
        next(new Error('not implemented'));
    })
    .delete(function(req, res, next) {
        next(new Error('not implemented'));
    })

module.exports = router;
