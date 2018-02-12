var express = require('express');
var router = express.Router();




router.get('/', function(req, res, next) {

    res.render('chocopeanut', { title: 'Chocolate Peanut Butter Pie',id:44 });
});



module.exports = router;
