/**
 * Created by Daniel on 2015/10/24.
 */
var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */

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

    var options = {
        url: 'http://hackathon.promise.com.tw/keystone/v3/auth/tokens',
        method: 'POST',
        headers: {
            'User-Agent': username + '.User.Portal'
        },
        json: payload
    };

    request(options, function (error, response, body) {
        if (response.statusCode == 201) {
            req.session.token = response.headers["x-subject-token"];
            req.session.user = req.body.username;
            req.session.password = req.body.passwd;
            req.session.header = req.body.username + '.User.Portal';
            req.session.domain = req.body.domain;


            var options = {
                url: 'http://hackathon.promise.com.tw/fileop/v1/metadata/',
                method: 'GET',
                headers: {
                    'User-Agent': req.session.header,
                    'X-Auth-Token': req.session.token
                }
            };
            request(options, function (error, response, body) {
                req.session.path = JSON.parse(body).contents;
                console.log(req.session.path);
                res.redirect('/');
            });

        } else {
            res.send(response);
        }
    });


});


module.exports = router;
