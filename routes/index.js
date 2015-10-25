var express = require('express');
var request = require('request');
var router = express.Router();
var fs = require('fs');


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
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
    countries: [
        {
            name: "Taiwan",
            area: [
                {
                    name: "Hsinchu",
                    organization: [
                        {
                            name: "NCTU"
                        },
                        {
                            name: "NTHU"
                        },
                        {
                            name: "9dorm322"
                        }
                    ]
                },
                {
                    name: "Kaoshiung",
                    organization: [
                        {
                            name: "KMT"
                        }
                    ]
                },
                {
                    name: "Taipei",
                    "organization": [
                        {
                            name: "NTU"
                        },
                        {
                            name: "Taipei101"
                        },
                        {
                            name: "station"
                        }
                    ]
                },
                {
                    name: "Yilan",
                    organization: [
                        {
                            name: "Yilan101"
                        },
                        {
                            name: "Yilan202"
                        }
                    ]
                },
                {
                    name: "Taichung",
                    organization: [
                        {
                            name: "my_home"
                        },
                        {
                            name: "BinLaDon"
                        }
                    ]
                }
            ]
        },
        {
            name: "US",
            area: []
        },
        {
            name: "zimbaja",
            area: []
        },
        {
            name: "EaZy",
            area: []
        },
        {
            name: "ChiChi",
            area: []
        }

    ]
};

/* GET home page. */
router.get('/', function (req, res, next) {
    event.findRandom({}, {}, {limit: 8}, function (err, result) {
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

router.get('/:filter', function (req, res, next) {
    //console.log(req.body);
    event.findRandom({$or: [{organization: req.params.filter}, {area: req.params.filter}, {country: req.params.filter}]}, {}, {limit:8},function (err, result) {
        res.render('box', {
            data: result
        });
    });
});

router.get('/upload', function (req, res, next) {
    var time = Date.now();
    fs.readFile('./app.js', function (err, data) {
        var options = {
            url: 'http://hackathon.promise.com.tw/fileop/v1/files_put/' + 'app.js',
            method: 'PUT',
            headers: {
                'X-Auth-Token': req.session.token,
                'User-Agent': req.session.header,
                'X-Meta-FC-Compress': false,
                'X-Meta-FC-Encrypt': false,
                'X-Meta-FC-Mtime': time + "#" + time + "#" + time
            },
            postData: {
                params: {
                    overite: true
                }
            },
            body: data
        };
        request(options, function (err, response, body) {
            //console.log(body);
            res.redirect('/');
        })
    });
});

router.post('/update', function (req, res, next) {
    new event({
        country: 'ChiChi',
        title: req.body.title,
        time: req.body.time,
        date: req.body.date,
        host: req.body.host,
        location: req.body.location,
        price: req.body.price,
        quota: req.body.quota,
        detail: req.body.des
    }).save(function (err, data) {
        console.log(data);
        res.redirect('/')
    });
});


module.exports = router;
