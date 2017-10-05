const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user.js');
const Event = require('../models/event.js')

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

//------------- User CRUD
//Get User
router.get('/user', (req, res) => {
    User.findOne(req.body, function(err, user){
        if(err){
            console.log(err);
        } else {
            response.data = user;
            console.log(user.wnum);
            res.json(response);
        }
    })
})

//Get All Users
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

//Create User
router.post('/addUser', (req, res) => {
    var obj = req.body;
    var user = new User(obj);
    User.create(user, function(err, res){
        if(err){
            console.log(err);
        } else {
            return 'created';
        }
    })
});

//Update User
router.put('/updateUser', (req, res) => {
    User.update({_id: req.body._id}, {$set: req.body}, function(err, res){
        if(err){
            console.log(err);
        } else {
            return 'updated';
        }
    })
});

//Delete User
router.post('/deleteUser', (req, res) => {
    User.findByIdAndRemove({_id: req.body._id}, function(err, res){
        if(err){
            console.log(err);
        } else {
            return 'deleted';
        }
    })
});

//------------- Event CRUD
//Get Event
router.get('/event', (req, res) => {
    Event.findOne(req.body, function(err, event){
        if(err){
            console.log(err);
        } else {
            response.data = event;
            res.json(response);
        }
    })
})

//Get All Events
router.get('/events', (req, res) => {
    Event.find({}, function(err, events){
        if(err){
            console.log(err);
        } else {
            response.data = events;
            res.json(response);
        }
    })
});

//Create Event
router.post('/addEvent', (req, res) => {
    var obj = req.body;
    var user = new Event(obj);
    Event.create(user, function(err, res){
        if(err){
            console.log(err);
        } else {
            return 'created';
        }
    })
});

//Update Event
router.put('/updateEvent', (req, res) => {
    Event.update({_id: req.body._id}, {$set: req.body}, function(err, res){
        if(err){
            console.log(err);
        } else {
            return 'updated';
        }
    })
});

//Delete Event
router.post('/deleteEvent', (req, res) => {
    Event.findByIdAndRemove({_id: req.body._id}, function(err, res){
        if(err){
            console.log(err);
        } else {
            return 'deleted';
        }
    })
});

module.exports = router;