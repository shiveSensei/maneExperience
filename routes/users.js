const router = require('express').Router();
//const passport = require('passport');
//const jwt = require('jsonwebtoken');
const User = require('../models/user');

//Add new user
router.post('/addUser', (req, res, next)=>{

	//create new User
	let newUser = new User({

		//set required User info
		name: req.body.name,
		wnum: req.body.description,
		password: req.body.password
	});

	//add new User to db
	User.addUser(newUser, (err, event)=>{
		if (err) {
			throw err;
		}else {
			res.json({success: true, msg: "User added", userName: newUser.name});
		}
	})
});

//Get all users
router.get('', (req, res, next)=>{

	User.getUsers(function(err, users){
		if(err){
			throw err;
		}
		res.json(users);
	});
});

//Get user by id
module.exports.getUserById = function(id, callback){
	User.findById(id, (err, user)=>{
		if(err) {
			throw err;
		}else {
			res.json({username: user.name });
		}
	});
}

//Delete User
module.exports.deleteUser = function(callback){
	
	User.removeEventById(id, (err, event)=>{

		if (err) {
			throw err;
		}else {
			res.json({success: true, msg: "User deleted"});
		}
	});
}

//Update User
module.exports.updateUser = function(query, newValue, callback){
	
	//select user by id

	//save changed
	User.updateUser(newUser, (err, user)=>{

		if (err) {
			throw err;
		}else {
			res.json({success: true, msg: "User updated", userName: user.name});
		}
	})
}

module.exports = router;