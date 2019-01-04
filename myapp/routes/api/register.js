var express = require('express');
var router = express.Router();

var db = require('../db');  //require的路径是我们的db模块相对于本文件的路径
var utils = require('../utils');

var sql_phone = `SELECT phone FROM user_db1 WHERE phone=?`
var sql_register = `INSERT INTO user_db1(phone, password, register_date) VALUES(?, ?, ?)`

router.route('/')
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
        var validata1 = utils.validata(req.body.phone, '请填写电话号码')
        var validata2 = utils.validata(req.body.password, '请填写密码')
        if (!validata1.status) {
            return res.json(validata1)
        }
        if (!validata2.status) {
            return res.json(validata2)
        }
        db.query(sql_phone, [req.body.phone], (results, error) => {
            if (error) {
                return res.json(utils.error(error.message));
            }
            if (results.length > 0) {
                return res.json(utils.error('此号码已注册！'));
            } else {
                db.query(sql_register, [req.body.phone, req.body.password, new Date()], (results2, error2) => {
                    if (error2) {
                        return res.json(utils.error(error2.message));
                    }
                    return res.json(utils.success('注册成功！'));
                })
            }
        })
    })
    .delete(function(req, res, next) {
        next(new Error('not implemented'));
    })

module.exports = router;