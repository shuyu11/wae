/**
 * Created by lenovo on 2017/10/31.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection=mysql.createPool({
    url:'localhost',
    user:'root',
    password:'123456',
    database:'baobei'
})
/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log(req.body)
    res.header('Access-Control-Allow-Origin','*');
    connection.query("SELECT * FROM word",function(err,rows,files){
        console.log(rows);
        res.send(rows)
    })
});
router.post('/con', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    var a=req.body.user;
    var b=req.body.con;
    console.log(a,b)
    connection.query("INSERT INTO word(user,bbs) VALUES('"+a+"','"+b+"')",function(err,rows,files){
        res.send(rows)
    })
});5
router.post('/del', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    console.log(req.body.num)
    var c=req.body.num
    connection.query("DELETE FROM word WHERE id="+c,function(err,rows,files){
        res.send(rows)
    })
});
module.exports = router;
