const User = require('../models/user'),
config = require('../config/config'),
passport = require('passport'),
JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = function(passport){

}
//define options object for auth strategy
let opts = {}

//set options for auth strategy
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
opts.secretOrKey = config.secret;

passport.use(new JwtStrategy(opts, (jwt_payload, done)=> {

    User.getUserByID(jwt_payload._doc._id , (err, user)=> {
        if (err) {
            return done(err, false);
        }
        //if user is not found
        if (!user) {
            return done(null, false);
        } 
        //user found and authenticated
        return done(null, user);
        // or you could create a new account
    });
}));