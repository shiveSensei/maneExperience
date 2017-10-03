const router = require('express').Router();
const config = require('../config/database');
const co = require('co');

const Event = require('../models/event');

router.get('', (req, res, next)=>{

	Event.getEvents(function(err, events){
		if(err){
			throw err;
		}
		res.json(events);
	});

});

router.post('/addEvent', (req, res, next)=>{

	//create new Event
	let newEvent = new Event({
		name: req.body.name,
		description: req.body.description,
		category: req.body.category
	});

	//save new Event to db
	Event.newEvent(newEvent, (err, event)=>{
		if (err) {
			throw err;
		}else {
			res.json({success: true, msg: "Event added", eventName: newEvent.name});
		}

	})



});

module.exports = router;
