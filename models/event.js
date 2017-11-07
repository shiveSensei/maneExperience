const mongoose = require('mongoose');
const config = require('../config/database');
const co = require('co');
const Schema = require('mongoose').Schema;
const Category = require('../models/category');
//Event Schema

const EventSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		index: true
	},
	track: {
		type: [String],
		enum: ['Resident Track', 'Commuter Track']
	},
	attendees: {
		type: [String]
	},
	description: {
		type: String
	},
	location: {
		type: String
	},
	date: {
		type: Date
	},
	time: {
		type: String
	}

});

const Event = module.exports = mongoose.model('Event', EventSchema);

//---------------------FUNCTIONS

//Get all Events
module.exports.getEvents = function (callback){

	Event.find(callback);
};

//Get event by id
module.exports.getEventById = function(id,callback){
	const query = {_id: id};
	Event.findOne(query, callback);
};

//Get event by title
module.exports.getEventByTitle = function(title,callback){
	const query = {title: title};
	Event.findOne(query, callback);
};

//Add Event to db
module.exports.addEvent = function (newEvent, callback) {
	newEvent.save(callback);
};

//Add Atendees to event
module.exports.addAttendee = function(wnum, eTitle, callback) {

	var query = {title: eTitle};
	var attendee = {attendees: wnum};
	
	Event.findOneAndUpdate(query, {$push: attendee}, {safe: true, upsert: true, new: true}, 
		
		(err, doc)=>{
			if (err) {
				throw err;
				console.log("Something went wrong");
			}else {
				
				console.log(doc);
				callback();
			}	
	});

}

//Update Event 
module.exports.updateEvent = function (updatedEvent, callback){
	updatedEvent.save(callback);
};

//Delete Event
module.exports.removeEventById = function(id, callback){	
	Event.findByIdAndRemove(id, callback);
}
