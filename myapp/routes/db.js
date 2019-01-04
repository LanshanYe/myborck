var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// 创建 mysql 连接池资源
var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'qiu123',
    database : 'mybork'
});

function query(sql, arr, callback){
    //建立链接
    pool.getConnection(function(err,connection){
        if(err){throw err;return;}
        connection.query(sql,arr,function(error,results,fields){
            //将链接返回到连接池中，准备由其他人重复使用
            connection.release();
            if(error) throw error;
            //执行回调函数，将数据返回
            callback && callback(results,error);
        });
    });
};

exports.query = query;