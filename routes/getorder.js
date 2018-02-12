var express = require('express');
var router = express.Router();
var db = require('./connect');

router.post('/', function(req, res, next) {

    var email = req.body.email;
    var cid = "SELECT CID FROM customer WHERE email='"+email+"'";
    db.query(cid,function(err,row,field){
        if(!err){
            var pid="SELECT PID FROM orderlist WHERE cid="+row[0].CID+" and status='placed'" ;
            db.query(pid,function(errs,rows,fields){
                var status;


                var list=[];
                var i=0;
                rows.forEach(function(){
                   list[i]=rows[i].PID;
                   i++;
                });

                var product = "SELECT product,price FROM product WHERE PID in("+list+")";
                db.query(product,function(e,r,f){
                   if(!e){
                       console.log(r);
                       res.json(r);
                   }
                });

            });
        }
    } );

});

module.exports = router;
