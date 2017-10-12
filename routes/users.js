const router = require('express').Router();
const passport = require('passport');
//const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');

//Add new user
router.post('/addUser', (req, res, next)=>{

	//create new User
	let newUser = new User({

		//set required User info
		name: req.body.name,
		wnum: req.body.description,
		password: req.body.password,
		isAdmin: false
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

//Update user (stubbed for Thomas)
router.put('/updateUser',passport.authenticate('jwt', {session:false}), (req, res, next)=>{
	//wnum from request
	const wnum = req.body.wnum;
	//check to see if user exists
	// User.getUserByWnumber(wnum, err, user)=>{

	// 	if(err) throw err;
	// 	if (!user){
	// 		return res.json(success: false, msg: "User does not exists");
	// 	}

	// 	//if user exists, update user
	// 	User.updateUser(wnum, newData, (err, newUser)=>{
	// 		if (err) {
	// 			throw err;
	// 		}else {
	// 			res.json({success: true, msg: "User updated"});
	// 		}
	// 	});
	// }	
});

//Remove user by id
router.delete('deleteUser',passport.authenticate('jwt', {session:false}), (req, res, next)=>{
	User.removeEventById(id, (err, event)=>{
		if (err) {
			throw err;
		}else {
			res.json({success: true, msg: "User deleted", userId: req.id});
		}
	});
})

//authenticate user 
router.post('/authenticate',(req, res, next)=>{

	//email/pw entered by user
  	const email = req.body.email;
  	const password = req.body.password;

	//checks if user exists
  	User.getUserByEmail(email, (err, user)=>{
  		
    	if(err) throw err;
    	if(!user){
      		return res.json({success: false, msg: 'User not found'});
    	}

	    //if user exists compares password
	    User.comparePassword(password, user.password, (err, isMatch)=>{
	    	if(err) throw err;
	    	if(isMatch){

	    		//if pw match set token
	    		const token = jwt.sign(user, config.secret, {expiresIn: 604800/*1 weeks time*/});
	    		//send response
	    		res.json({success: true, token: 'JWT: ' + token,
		          	user: {
			            id: user._id,
			            name: user.name,
			            email: user.email,
			            wnum: user.wnum
		          	}
	    		});
	    	}
	    	else {
	    		return res.json({success: false, msg: 'Wrong Password'});
	    	}	       
	    });
  	});
});

//get user profile
router.get('/profile',passport.authenticate('jwt', {session:false}), (req, res, next)=>{
  res.json({user: req.user});
});

module.exports = router;