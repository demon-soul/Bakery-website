var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('chococup', { title: 'Chocolate Cupcake',id:4});
});

module.exports = router;
