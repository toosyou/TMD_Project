var express = require('express');
var request = require('request');
var router = express.Router();
var fs = require('fs');


var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var random = require('mongoose-simple-random');
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
Event.plugin(random);
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
                        },
                        {
                            name:"NTHU"
                        },
                        {
                            name:"9dorm322"
                        }
                    ]
                },
                {
                    name:"Kaoshiung",
                    organizations:[
                        {
                            name:"KMT"
                        }
                    ]
                },
                {
                    name:"Taipei",
                    "organizations":[
                        {
                            name:"NTU"
                        },
                        {
                            name:"Taipei101"
                        },
                        {
                            name:"station"
                        }
                    ]
                },
                {
                    name:"Yilan",
                    organizations:[
                        {
                            name:"Yilan101"
                        },
                        {
                            name:"Yilan202"
                        }
                    ]
                },
                {
                    name:"Taichung",
                    organizations:[
                        {
                            name:"my_home"
                        },
                        {
                            name:"BinLaDon"
                        }
                    ]
                }
            ]
        },
        {
            name:"US",
            areas:[
            ]
        },
        {
            name:"zimbaja",
            areas:[
            ]
        },
        {
            name:"EaZy",
            areas:[
            ]
        },
        {
            name:"ChiChi",
            areas:[
            ]
        }

    ]
};

/* GET home page. */
router.get('/', function (req, res, next) {
    event.findRandom({}, {}, {limit: 8}, function(err, result) {
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

//router.get('/:filter', function (req, res, next) {
//    console.log(req.params);
//    event.find({}).limit(8).exec(function (err, result) {
//        res.send(result);
//    });
//});

router.get('/upload', function (req, res, next) {
    var time = Date.now();
    var f = fs.readFileSync('auth.js');
    var options = {
        url: 'http://hackathon.promise.com.tw/fileop/v1/files/',
        method: 'GET',
        headers: {
            'X-Auth-Token' : req.session.token,
            'User-Agent': req.session.header,
            'X-Meta-FC-Compress': false,
            'X-Meta-FC-Encrypt': false,
            'X-Meta-FC-Mtime': time+"#"+time+"#"+time
        },
        postData: {
            params: {
                overite: true
            }
        },
        body: f
    };
    request(options, function (err, response, body) {
        console.log(response);
        res.redirect('/');
    })
});



module.exports = router;
