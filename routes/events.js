const router = require('express').Router();
const Event = require('../models/event');
const User = require('../models/user');

//get all Events
router.get('', (req, res, next)=>{

	Event.getEvents(function(err, events){
		if(err){
			throw err;
		}
		res.json(events);
	});
});

//get a sngle Event
router.post('/event', (req, res, next)=>{
	//set id to request
	const title = req.body.title;

	Event.getEventByTitle(title, (err, event)=>{
		if (err) throw err; 
		//if event is not found
		if(!event){
			return res.json({success: false, msg: "Sorry, this event does not exist!"});
		}

		return res.json({success: true, event});
	})
})

//add an event
router.post('/addEvent', (req, res, next)=>{

	//create new Event model from req data
	let newEvent = new Event({
		title: req.body.title,
		description: req.body.description,
		track: req.body.track,
		location: req.body.location
		//date: Date.now
	});

	//check to see if Event title is already being used
	Event.getEventByTitle(newEvent.title, (err, event)=>{
		if (err) throw err;
		if (event){
			return res.json({success: false, msg: "Event already exists!"});
		}

		//save new Event to db
		Event.addEvent(newEvent, (err, event)=>{
			if (err) {
				throw err;
			}else {
				return res.json({success: true, msg: "Event added", eventName: event.title});
			}
		})
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
		//handle when the event does not exists
		if(!event){
			return res.json({success: false, msg: "Event does not exist!"});
		}

		//check to see if attendee is already attending
		Event.isAttending(title, wnum, (err, doc)=>{
			if (err){
				throw err;
			} 
			//if yuser has checked in already, don't allow for them to re-check
			if(doc){
				return res.json({success: false, msg:"You have already checked in"});
			}
			//if everything checks out, add user to event
			Event.addAttendee(wnum, title, (err, doc)=>{
				if (err) {
					throw err;
				}else {
					//TODO: once user is added to event, push event to User.registeredEvents
					return res.json({success: true, msg: "You have successfully checked in, enjoy!", atendee: wnum});
				}
			});
		})
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
		//handle when the event does not exist
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

	//validate id is a real objectID
	if(!id.match(/^[0-9a-fA-F]{24}$/)){

		return res.json({success:false, msg: "Not a proper objectID"});
	}

	//if id checks out, proceed to removing Event
	Event.removeEventById(id, (err, event)=>{

		if (err) {
			throw err;
			//handle if Event does NOT exists
			} if(!event){
				return res.json({success: false, msg: "Event does not exists!"});
			}else {
				return res.json({success: true, msg: "Event deleted", eventName: event.name});
			}
		});

	
});

module.exports = router;