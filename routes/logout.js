var express = require('express');
var router = express.Router();
var sess;
router.get('/',function(req,res,next){
    req.session.destroy();
});



module.exports = router;