var express = require('express');
var router = express.Router();




router.get('/', function(req, res, next) {

    res.render('pecanpie', { title: 'Pecan Pie',id:41 });
});



module.exports = router;
