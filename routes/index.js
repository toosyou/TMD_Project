var express = require('express');
var request = require('request');
var router = express.Router();

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var Event = new Schema({
    user_id    : String,
    content    : String,
    updated_at : Date
});

var event = mongoose.model('event', Event);


/* GET home page. */
router.get('/', function (req, res, next) {
    event.find({}, function (err, result) {
        console.log(result);
    });
    res.render('index', {
        title: 'NCTU Act',
        token: '',
        login: req.session.token !== undefined,
        user: req.session.user
    });

});


module.exports = router;
