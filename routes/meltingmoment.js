var express = require('express');
var router = express.Router();




router.get('/', function(req, res, next) {

    res.render('meltingmoment', { title: 'Melting Moment',id:39 });
});



module.exports = router;
