var express = require('express');
var router = express.Router();
var db = require('./connect');

router.post('/',function(req,res,next){
    var email = req.body.email;
    var date = req.body.date;
    var time = req.body.time;
    var getuser = "SELECT CID FROM customer WHERE email='"+email+"'";
    db.query(getuser,function(err,row,field){
        if(!err){
            var sql = "UPDATE orderlist SET date='"+date+"',time='"+time+"' where CID="+row[0].CID+"and status='placed'";
            console.log(sql);
            db.query(sql,function(errs,rows,fields){
                if(!errs){
                    console.log(sql);
                    res.end(email);
                }
                else{
                    console.log(errs);
                }
            });

        }
    });
});

module.exports = router;