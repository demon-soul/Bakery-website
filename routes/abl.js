var express = require('express');
var router = express.Router();




router.get('/', function(req, res, next) {

    res.render('abl', { title: 'Apple Blueberry Loaf',id:33 });
});



module.exports = router;
