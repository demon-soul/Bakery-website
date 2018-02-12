var express = require('express');
var router = express.Router();

router.get('/',function (req, res, next) {
    res.render('pies_tarts',{title:"Pies and Tarts"});

});

module.exports = router;