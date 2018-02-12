var express = require('express');
var router = express.Router();
var db = require('./connect');

router.post('/',function(req,res,next){
   var email = req.body.email;
    var getuser = "SELECT CID FROM customer WHERE email='"+email+"'";
    db.query(getuser,function(err,row,field){
        if(!err){
            var sql = "UPDATE orderlist SET status='paid' where CID="+row[0].CID;
            console.log(sql);
            db.query(sql,function(errs,rows,fields){
                if(!errs){
                    console.log(sql);
                    res.end(email);
                }
            });

        }
    });
});

module.exports = router;