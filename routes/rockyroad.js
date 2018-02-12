var express = require('express');
var router = express.Router();




router.get('/', function(req, res, next) {

    res.render('rockyroad', { title: 'Rocky Road',id:35 });
});



module.exports = router;
