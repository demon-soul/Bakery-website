var express = require('express');
var router = express.Router();

router.get('/',function (req, res, next) {
    res.render('minicupcake',{title:"Minicupcake Cupcakes"});

});

module.exports = router;