const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user.js');
//const MongoClient = require('mongodb').MongoClient;
//const ObjectID = require('mongodb').ObjectId;

//Establish connection with DB
/*const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/testDB', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};*/

mongoose.connect('mongodb://localhost:27017/testDB');
var db = mongoose.connection;

//Check error
db.on('error', function(err){
    console.log(err);
});

//Check connection
db.once('open', function(){
    console.log('connected to MongoDB');
});

//Error handling
const sendError = (err, res) => {
    respons.status = 501;
    Response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

//Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

router.get('/users', (req, res) => {
    User.find({}, function(err, users){
        if(err){
            console.log(err);
        } else {
            response.data = users;
            res.json(response);
        }
    })
});

router.post('/addUser', (req, res) => {
    var obj = req.body;
    var user = new User(obj);
    User.create(user, 
        function(err){
        if(err){
            console.log(err);
        } else {
            res.send('created');
        }
    })
});

module.exports = router;