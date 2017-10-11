//required modules
const express = require('express'),
 mongoose = require('mongoose'),
 bodyParser = require('body-parser'),
 passport = require('passport'),
 cors = require('cors');

const config = require('./config/database');
const Events = require('./routes/events');
const Users = require('./routes/users');

//port number
const port = 3000;

//Set static folder
//app.use(express.static(path.join(__dirname, 'public')));

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

//--------------------MIDDLEWARE------------------------//

//Cors middleware
app.use(cors());

//Body Parser Middleware
app.use(bodyParser.json());

//passsport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


//Routes
app.use('/api/events', Events);
app.use('/api/users', Users);

app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
});

app.listen(port, () => {
	console.log('Server started on port ' + port);
});
