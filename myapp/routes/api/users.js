var express = require('express');
var router = express.Router();
var db = require('../db');  //require的路径是我们的db模块相对于本文件的路径

router.route('/')
    .all(function(req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        next();
    })
    .get(function(req, res, next) {
        // db.query('select * from user', [], function(results,fields){
        //     //查询后的回调
        //     //Results代表是查询的结果，如果是插入修改等操作，则返回影响数据库信息的对象
        //     // fields代表查询的字段信息
        // })
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
        // db.query('select * from user', [], function(results,fields){
        //     //查询后的回调
        //     //Results代表是查询的结果，如果是插入修改等操作，则返回影响数据库信息的对象
        //     // fields代表查询的字段信息
        // })
        next(new Error('not implemented'));
    })
    .delete(function(req, res, next) {
        next(new Error('not implemented'));
    })

module.exports = router;
