const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/config');

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
module.exports.getUserByWnum = function(wnum, callback){
	const query = {wnum: wnum};
	User.findOne(query, callback);
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

//Add event to User.registeredEvents
module.exports.registeredForEvent = function(wnum, eTitle, callback) {

	var query = {wnum: wnum};
	var event = {registeredEvents: eTitle};
	
	Event.findOneAndUpdate(query, {$push: event}, {safe: true, upsert: true, new: true}, 
		(err, doc)=>{
			if (err) {
				throw err;
				console.log("Something went wrong");
			}else {	
				callback();
			}	
	});
}

//Update pw user
module.exports.updatePw = function(wnum, newPass, callback){
	
	//hash pw
	bcrypt.genSalt(10,(err, salt) =>{
		bcrypt.hash(newPass, salt, (err, hash)=>{
			if(err) throw err;
			pw = hash;

			//set query and new pw to be passed in
			var query = {wnum: wnum};
			var n = {password: pw};
			console.log(n.password);
			
			//Save updated info
			User.findOneAndUpdate(query, {$set: {password: pw}}, {safe: true, new: true}, 
		
				(err, doc)=>{
					if (err) {
						throw err;
						console.log("Something went wrong");
					}else {
						
						console.log(doc);
						callback();
					}	
				});
			// newUser.save(callback);
		})
	});
}
//Delete User
module.exports.removeUserById = function(id, callback){	
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
