const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

/* Event Schema */
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

/* Event Declaration */
const Event = module.exports = mongoose.model('Event', EventSchema);

/* Event Functions */
//Add Event
module.exports.addEvent = function(newEvent, callback){
	newEvent.save(callback);
}

//Get Event
module.exports.getEvent = function(callback){
	Event.find(callback);
}

module.exports.getEventById = function(id, callback){
	Event.findById(id, callback);
}

//Delete Event
module.exports.deleteEvent = function(callback){
	Event.remove(callback); //Unsure if '.remove' is an available function. Found it in documentation somewheres
}

//Update Event
module.exports.updateEvent = function(query, newValue, callback){
	Event.update(query, newValue, callback);
}
