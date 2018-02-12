var express = require('express');
var router = express.Router();




router.get('/', function(req, res, next) {

    res.render('nutellacookie', { title: 'Nutella Cookie',id:40 });
});



module.exports = router;
