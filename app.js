//required modules
const express = require('express'),
 mongoose = require('mongoose'),
 //MongoClient = require('mongodb').MongoClient,
 bodyParser = require('body-parser'),
 cors = require('cors');

const config = require('./config/database');
const Events = require('./routes/events');
const Categories = require('../portfolio/routes/categories');

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


//port number
const port = 3000;

//Set static folder
//app.use(express.static(path.join(__dirname, 'public')));

//Cors middleware
app.use(cors());

//Body Parser Middleware
app.use(bodyParser.json());


app.use('/api/events', Events);
app.use('/api/categories', Categories);

app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
});

app.listen(port, () => {
	console.log('Server started on port ' + port);
});
