var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {


    res.render('carrc', { title: 'Carrot Regular Cupcake',id:11 });
});


module.exports = router;
