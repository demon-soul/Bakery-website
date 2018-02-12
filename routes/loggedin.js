var express = require('express');
var router = express.Router();
var db = require('./connect');
var sess;

router.post('/', function(req, res, next) {
    var email = req.body.email;
    var password = req.body.pass;

    var sql = "SELECT * FROM customer WHERE email='"+email+"'";
    db.query(sql,function(err,rows,field){
        if(err){
            console.log('User not found');
            res.end('fail');
        }else{
            sess=req.session;
            sess.email = email;
            res.end('success');

        }
    });

});



module.exports = router;
