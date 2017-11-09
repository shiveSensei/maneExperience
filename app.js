//required modules
const express = require('express'),
http = require('http'),
https = require('https'),
fs = require('fs'),
 mongoose = require('mongoose'),
 bodyParser = require('body-parser'),
 cors = require('cors'),
 passport = require('passport');
 require('./config/passport')(passport);



//required files
const config = require('./config/config'),
 Events = require('./routes/events'),
 Users = require('./routes/users');

const httpsOptions = {
	key: fs.readFileSync('./encryption/pkey.pem'),
	cert: fs.readFileSync('./encryption/cert.pem')
}

//connect to database
mongoose.connect(config.database);

//On Connection
mongoose.connection.on('connected', () => {
	console.log('Connected to database ' + config.database);
});

//ON Error
mongoose.connection.on('error', (err) => {
	console.log('Database error ' + err);
});

//initilize Express app
const app = express();


//create servers
http.createServer(app).listen(config.http, ()=>{
	console.log('HTTP server started on port: ' + config.http)
});
https.createServer(httpsOptions, app).listen(config.https, ()=>{
	console.log('HTTPS Server started on port: ' + config.https);
});

// app.listen(config.port, () => {
// 	console.log('Server started on port ' + config.port);
// });

//--------------------MIDDLEWARE------------------------//

//Cors middleware
app.use(cors());

//Body Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


//Routes
app.use('/api/events', Events);
app.use('/api/users', Users);

app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
});


