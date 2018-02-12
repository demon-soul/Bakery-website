var express = require('express');
var router = express.Router();

router.get('/',function (req, res, next) {
    res.render('lsb',{title:"Loaves Slices and Biscuits"});

});

module.exports = router;