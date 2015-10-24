var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('index', {
        title: 'NCTU Act',
        token: '',
        login: req.session.token !== undefined,
        user: req.session.user
    });

});


module.exports = router;
