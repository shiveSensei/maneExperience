
const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/config');

//Add new user
router.post('/addUser', (req, res, next)=>{

	//create new User
	let newUser = new User({

		//set required User info
		name: req.body.name,
		wnum: req.body.wnum,
		password: req.body.password,
		email: req.body.email,
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

	User.getUsers((err, users)=>{
		if(err){
			throw err;
		}
		res.json(users);
	});
});

//Update user (can only change pw/image)
router.post('/updateUser',/*passport.authenticate('jwt', {session:false}),*/ (req, res, next)=>{
	
	//gather data from request
	const wnum = req.body.wnum;
	const newPass = req.body.newPw;

	//check if user exists
	User.getUserByWnum(wnum, (err, user)=>{

		if (err) throw err;
		if(!user){
			 return res.json({success: false, msg: "User not found"});
		}

		//if user exists, then update password
		User.updatePw (wnum, newPass, (err, n)=>{
		
			if (err){
				throw err;
			}else {
				return res.json({success: true, msg: "Your password has been updated"});
			}
		})	
	})
});

//Remove user by id
router.delete('/deleteUser',/*passport.authenticate('jwt', {session:false}),*/ (req, res, next)=>{
	const id = req.body.id;
	User.removeUserById(id, (err, user)=>{
		if (err) {
			throw err;
		}else {
			return res.json({success: true, msg: "User deleted", userId: req.id});
		}
	});
})

//authenticate user 
router.post('/authenticate',(req, res, next)=>{

	//email/pw entered by user
  	const wnum = req.body.wnum;
  	const password = req.body.password;

	//checks if user exists
  	User.getUserByWnum(wnum, (err, user)=>{
  		
    	if(err) throw err;
    	if(!user){
      		return res.json({success: false, msg: 'User not found'});
    	}

	    //if user exists compares password
	    User.comparePassword(password, user.password, (err, isMatch)=>{
	    	if(err) throw err;
	    	if(isMatch){

	    		//if pw match set token
	    		const token = jwt.sign(user, config.secret, 
	    		{expiresIn: 604800/*1 weeks time*/});

	    		//send response
	    		res.json({success: true, 
	    			token: 'JWT: ' + token,
		          	user: {
			            id: user._id,
			            name: user.name,
			            wnum: user.wnum
		          	}
	    		});
	    	}
	    	//no match
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