var express = require('express');
var router = express.Router();



var carrc = require('./carrc');

router.get('/',function (req, res, next) {
    res.render('regcupcake',{title:"Regular Cupcakes"});

});


module.exports = router;