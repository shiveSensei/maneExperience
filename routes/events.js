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
			return res.json({success: true, msg: "Event added", eventName: event.title});
		}
	})
});

//add an attendee
router.put('/addAttendee', (req, res, next)=>{

	//set attendee
	const wnum = req.body.wnum;
	const title = req.body.title;

	//check to see if Event exists
	Event.getEventByTitle(title, (err, event)=>{
		if (err) throw err;
		if(!event){
			return res.json({success: false, msg: "Event does not exist!"});
		}
	
		//add attendee to Events attendee array
		Event.addAttendee(wnum, title, (err, doc)=>{
			
			if (err) {
				throw err;

			}else {
				console.log(doc);

				return res.json({success: true, msg: "You have successfully checked in, enjoy!", atendee: wnum});
			}
		});
	});

});

//Update a single event
router.post('/updateEvent',/*passport.authenticate('jwt', {session:false}),*/ (req, res, next)=>{

	//create new Event model and set request info
	let newEvent = new Event({
		title: req.body.title,
		description: req.body.description,
		track: req.body.track,
		location: req.body.location,
		date: Date.now
	});
	
	
	//check if Event exists
	User.getEventById(id, (err, event)=>{

		if (err) throw err;
		if(!event){
			return res.json({success: false, msg: "Event not found"});
		}

		//if event exists, then update data
		User.updatePw (wnum, newPass, (err, n)=>{
		
			if (err){
				throw err;
			}else {
				return res.json({success: true, msg: "Your password has been updated"});
			}
		})	
	})
});

//update a single event
// router.put('/updateEvent', (req, res, next)=>{
	
// 	let newEvent = new Event ({
// 		title: req.body.title,
// 		description: req.body.description,
// 		track: req.body.track,
// 		location: req.body.location,
// 		date: req.body.date,
// 		time: req.body.time
// 	})

// 	//save changed
// 	Event.updateEvent(newEvent, (err, event)=>{

// 		if (err) {
// 			throw err;
// 		}else {
// 			return res.json({success: true, msg: "Event updated", eventName: event.name});
// 		}
// 	})
// });

//remove a single event
router.delete('/removeEvent', (req, res, next)=>{
	const id = req.body.id;

	Event.removeEventById(id, (err, event)=>{

		if (err) {
			throw err;
		}else {
			return res.json({success: true, msg: "Event deleted", eventName: event.name});
		}
	});
});

module.exports = router;
