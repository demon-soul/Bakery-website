var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    res.render('kinderbueno', { title: 'Kinder Bueno Celebration Cake',id:23 });
});


module.exports = router;
