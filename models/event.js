const mongoose = require('mongoose');
const config = require('../config/database');
const co = require('co');
const Schema = require('mongoose').Schema;
const Category = require('../models/category');
//Event Schema

const EventSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	track: {
		type: [String],
		enum: ['Resident Track', 'Commuter Track']
	},
	description: {
		type: String
	},
	location: {
		type: String
	},
	date: {
		type: Date,
		required: true
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
	Event.findById(id, (err, event)=>{
		if (err) {
			throw err;
		}else {
			res.json({eventName: event.name});
		}
	});
};

//Add Event to db
module.exports.addEvent = function (newEvent, callback) {
	newEvent.save(callback);
};

//Update Event ???
module.exports.updateEvent = function (updatedEvent, callback){
	updatedEvent.save(callback);
};

//Remove Event
module.exports.removeEventById = function(callback){
	Event.findByIdAndRemove(id, callback);

};
