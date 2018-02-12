var express = require('express');
var router = express.Router();

var sess;

router.get('/',function(req,res,next){
    var sess = req.session;
    if(sess.email) {
        res.end(sess.email);
    }

});

module.exports = router;