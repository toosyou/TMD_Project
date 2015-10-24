/**
 * Created by Daniel on 2015/10/24.
 */
var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login', {title: 'Auth'});
});

router.post('/login', function (req, res, next) {
    var username = req.body.username;
    var passwd = req.body.passwd;
    var domain = req.body.domain;

    var payload = {
        'auth': {
            'identity': {
                'methods': ['password'],
                'password': {
                    'user': {
                        'domain': {
                            'name': domain
                        },
                        'name': username,
                        'password': passwd
                    }
                }
            },
            'scope': {
                'project': {
                    'domain': {
                        'name': domain
                    },
                    'name': username
                }
            }
        }
    };

    // Set the headers
    var headers = {
        'User-Agent': username + '.User.Portal'
    };

// Configure the request
    var options = {
        url: 'http://hackathon.promise.com.tw/keystone/v3/auth/tokens',
        method: 'POST',
        headers: headers,
        json: payload
    };

// Start the request
    request(options, function (error, response, body) {
        if (response.statusCode == 201) {
            console.log(req.session);
            res.redirect('/');
        } else {
            res.send(response);
        }
    });

});


module.exports = router;
