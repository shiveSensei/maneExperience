const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//USER schema
const UserSchemea = mongoose.Schema({
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

const User = module.exports = mongoose.model('User', UserSchemea);

//---------------------FUNCTIONS

//Get all users
module.exports.getUsers = function (callback){

	User.find(callback);
}

//Get user by id
module.exports.getUserByID = function(id, callback){
	User.findById(id, callback);
}

//Get user by wnumber
module.exports.getUserByWnumber = function(wnum, callback){
	const query = {wnum: wnum};
	User.findone(query, callback);
}

//Get user by username
module.exports.getUserByUsername = function(username, callback){
	const query = {username: username};
	User.findOne(query, callback);
}
//Get user by email
module.exports.getUserByEmail = function(email, callback){
  const query = {email : email}
  User.findOne(query, callback);
}

//Add user
module.exports.addUser = function(newUser, callback){
	bcrypt.genSalt(10,(err, salt) =>{
		bcrypt.hash(newUser.password, salt, (err, hash)=>{
			if(err) throw err;
			newUser.password = hash;
			newUser.save(callback);
		})
	});
}

//Delete User
module.exports.deleteUser = function(callback){
	User.findByIdAndRemove(id, callback);
}

//Update User
module.exports.updateUser = function(query, newValue, callback){
	//const query = {wnum: wnum}
	User.update(query, newValue, callback);
}

//Compare password (used for login)
module.exports.comparePassword = function(candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
		if (err) throw err;
		callback(null, isMatch);
	});
}