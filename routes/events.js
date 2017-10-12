const router = require('express').Router();
const Event = require('../models/event');
const passport = require('passport');


//get all Events
router.get('/getAll', (req, res, next)=>{

	Event.getEvents(function(err, events){
		if(err){
			throw err;
		}
		res.json(events);
	});
});

//add an event
router.post('/addEvent',passport.authenticate('jwt', {session:false}), (req, res, next)=>{

	//create new Event
	let newEvent = new Event({
		title: req.body.title,
		description: req.body.description,
		track: req.body.track,
		location: req.body.location
	});

	//save new Event to db
	Event.addEvent(newEvent, (err, event)=>{
		if (err) {
			throw err;
		}else {
			res.json({success: true, msg: "Event added", eventName: event.title});
		}
	})
});

//update an event (stubbed)
router.put('/updateEvent',passport.authenticate('jwt', {session:false}), (req, res, next)=>{
	//select event by id

	//save changed
	Event.updateEvent(newEvent, (err, event)=>{

		if (err) {
			throw err;
		}else {
			res.json({success: true, msg: "Event updated", eventName: event.name});
		}
	})	
});

//remove an event
router.delete('/removeEvent',passport.authenticate('jwt', {session:false}), (req, res, next)=>{

	Event.removeEventById(id, (err, event)=>{

		if (err) {
			throw err;
		}else {
			res.json({success: true, msg: "Event deleted", eventName: event.name});
		}
	});
});

module.exports = router;
