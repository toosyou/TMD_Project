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

router.get('/:filter', function (req, res, next) {
    console.log(req.params);
    event.find({}).limit(8).exec(function (err, result) {
        res.send(result);
    });
});



module.exports = router;
