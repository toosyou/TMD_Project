/**
 * Created by Daniel on 2015/10/24.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Auth' });
});



module.exports = router;
