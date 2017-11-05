const router = require('express').Router();
const Event = require('../models/event');

//get all Events
router.get('', (req, res, next)=>{

	Event.getEvents(function(err, events){
		if(err){
			throw err;
		}
		res.json(events);
	});
});

//add an event
router.post('/addEvent', (req, res, next)=>{

	//create new Event
	let newEvent = new Event({
		title: req.body.title,
		description: req.body.description,
		track: req.body.track,
		location: req.body.location
		//date: Date.now
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

//add an attendee
router.put('/addAttendee', (req, res, next)=>{

	//set attendee
	const wnum = req.body.wnum;
	const eTitle = req.body.eTitle;
	//console.log(wnum, eTitle);
	
	//add attendee to Events attendee array
	Event.addAttendee(wnum, eTitle, (err, doc)=>{
		
		if (err) {
			throw err;

		}else {

			res.json({success: true, msg: "You have successfully checked in, enjoy!", atendee: wnum});
		}
	})

})

//update a single event
router.put('/updateEvent', (req, res, next)=>{
	//select event by id

	//save changed
	Event.updateEvent(newEvent, (err, event)=>{

		if (err) {
			throw err;
		}else {
			res.json({success: true, msg: "Event updated", eventName: event.name});
		}
	})
	
	res.send('UPDATED Event');
});

//remove a single event
router.delete('/removeEvent', (req, res, next)=>{

	Event.removeEventById(id, (err, event)=>{

		if (err) {
			throw err;
		}else {
			res.json({success: true, msg: "Event deleted", eventName: event.name});
		}
	});
});

module.exports = router;
