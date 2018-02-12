var express = require('express');
var router = express.Router();
var db = require('./connect');

router.post('/',function(req,res,next){
   var address = req.body.address;
   var email = req.body.email;
   var getuser = "SELECT CID FROM customer WHERE email='"+email+"'";
   db.query(getuser,function(err,row,field){
      if(!err){
          var sql = "UPDATE orderlist SET address='"+address+"' where CID="+row[0].CID+"and status='placed'";
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