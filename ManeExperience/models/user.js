const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

/* User Schema */
const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
    wnum: {
        type: String,
        length: 7,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true	
	},
	isAdmin: {
		type: Boolean,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	registeredEvents: {
		type: [String]
	},
	participatedEvents: {
		type: [String]
	}
});

/* User Declaration */
const User = module.exports = mongoose.model('User', UserSchema);

/* User Functions */
//Add User
module.exports.addUser = function(newUser, callback){
	newUser.save(callback);
}

//Get User
module.exports.getUser = function(callback){
	User.find(callback);
}
module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

//Delete User
module.exports.deleteUser = function(callback){
	User.remove(callback); //Unsure if '.remove' is an available function. Found it in documentation somewheres
}

//Update User
module.exports.updateUser = function(query, newValue, callback){
	User.update(query, newValue, callback);
}