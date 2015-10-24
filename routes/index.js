var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('index', {
        title: 'NCTU Act',
        token: req.session.token,
        login: req.session.token !== undefined,
        path: req.session.path
    });
});


module.exports = router;
