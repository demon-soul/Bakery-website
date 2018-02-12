var express = require('express');
var router = express.Router();




router.get('/', function(req, res, next) {

    res.render('treacle', { title: 'Treacle Tart',id:42 });
});



module.exports = router;
