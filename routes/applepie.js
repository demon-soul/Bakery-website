var express = require('express');
var router = express.Router();




router.get('/', function(req, res, next) {

    res.render('applepie', { title: 'Apple Pie',id:43 });
});



module.exports = router;
