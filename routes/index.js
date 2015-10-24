var express = require('express');
var request = require('request');
var router = express.Router();


var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var Event = new Schema({
        name: String,
        organization: String,
        area: String,
        country: String,
        img_scr: String,
        title: String,
        date: String,
        time: String,
        location: String,
        host: String,
        price: Number,
        sponsor: String,
        quota: Number,
        detail: String,
        tags: [
                {
                    name: String
                }
            ]
    }
);

var event = mongoose.model('event', Event);

obj = {
    countries:[
        {
            name:"Taiwan",
            areas:[
                {
                    name:"Hsinchu",
                    organizations:[
                        {
                            name:"NCTU"
                        }
                    ]
                },
                {
                    name:"Kaoshiung",
                    organizations:[
                    ]
                },
                {
                    name:"Taipei",
                    "organizations":[
                    ]
                },
                {
                    name:"Yilan",
                    organizations:[
                    ]
                },
                {
                    name:"Taichung",
                    organizations:[
                    ]
                }
            ]
        },
        {
            name:"US",
            areas:[
            ]
        }

    ]
};

/* GET home page. */
router.get('/', function (req, res, next) {
    event.find({}).limit(8).exec(function (err, result) {
        res.render('index', {
            title: 'NCTU Act',
            token: '',
            login: req.session.token !== undefined,
            user: req.session.user,
            data: result,
            struct: obj
        });
    });
});


module.exports = router;
