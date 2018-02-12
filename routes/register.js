var express = require('express');
var router = express.Router();
var db = require('./connect');

router.post('/',function(req,res,next){
    var fname = req.body.fname;
    var lname = req.body.lname;
    var age = req.body.age;
    var email = req.body.email;
    var pass = req.body.pass;
    var contact = req.body.contact;
    var sql = "INSERT INTO customer VALUES(NULL,'"+fname+"','"+lname+"',"+age+",'"+email+"','"+pass+"','"+contact+"')";
    db.query(sql,function(err){
        if(err){
            res.write("<script>alert('Sign up failed');document.location='/signup';</script>");

        }
        else{
            res.write("<script>alert('Sign up Successful');document.location='/'; </script>");
            res.end();
        }
    });
});

module.exports = router;