var express = require('express');
var router = express.Router();




router.get('/', function(req, res, next) {

    res.render('acs', { title: 'Apple Crumble Slice',id:34 });
});



module.exports = router;
