var express = require('express');
var router = express.Router();
var db = require('./connect');
var sess;

router.post('/', function(req, res, next) {
    var id = req.body.id;
    var email = req.body.email;
    var user ="SELECT * FROM customer where email='"+email+"'";
    var product = "SELECT * FROM product where PID="+parseInt(id);

    db.query(user,function(errs,rows,fields){
       if(!(errs)){


           db.query(product,function(err,row,field){
              if(!(err)){
                  var sql = "INSERT INTO orderlist VALUES("+parseInt(rows[0].CID)+","+parseInt(row[0].PID)+",'','','','placed')";

                  db.query(sql,function(e){
                     if(!e){

                         res.end();
                     }
                     else{
                         console.log(e);
                     }

                  });
              }

           });
       }
    });

});



module.exports = router;
