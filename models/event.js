const mongoose = require('mongoose');
const config = require('../config/database');
const co = require('co');
const Schema = require('mongoose').Schema;
const Category = require('../models/category');
//Event Schema

const EventSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	category:{
		type: Schema.Types.ObjectId,
		ref: 'Category',
		//required: true
	}

});

const Event = module.exports = mongoose.model('Event', EventSchema);

//---------------------FUNCTIONS

//Get Events
module.exports.getEvents = function (callback){

	Event.find(callback);

}

module.exports.getEventById = function(id,callback){
	Event.findById(id, callback);
}



//Add Service to db
module.exports.addEvent = function (newEvent, callback) {
	newEvent.save(callback);

}
