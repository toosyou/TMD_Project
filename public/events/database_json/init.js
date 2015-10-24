/**
 * Created by Daniel on 2015/10/25.
 */

var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost/local';

MongoClient.connect(url, function(err, db) {
    insertDocument(db, function() {
        db.close();
    });
});

function insertDocument(db, callback) {
    fs.readdir('./', function(err, file) {
        file.forEach(function(name) {
            if (name.search(/.json/) != -1) {
                fs.readFile('./' + name,'utf8', function (err, data) {
                    if (err) throw err;
                    db.collection('events').insertOne(JSON.parse(data), function(err, result) {
                        console.log("Inserted a document into the restaurants collection.");
                        callback(result);
                    });
                });
            }
        })
    });
}
