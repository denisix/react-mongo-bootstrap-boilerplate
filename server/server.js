const express = require('express'),
	session = require('express-session'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	PORT = 4000,
	cors = require('cors'),
	mongoose = require('mongoose'),
	MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/test',
	routerTest = require('./test.routes.js'),
	path = require('path')

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
	secret: 'fookjjdljfkk91',
    name: 'COOK',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.use('/api/test', routerTest);

// server static files
const dir = (process.env.NODE_ENV === 'production')? '/../build' : '/../public';

app.use(express.static(path.join(__dirname, dir)));

app.get(['/', '/add', '/list', '/start', '/login'], function(req, res) {
  res.sendFile(path.join(__dirname, dir, 'index.html'));
});

// 404
app.use(function(req, res) {
	 res.status(404).send('<h1>Page not found!</h1>')
});

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});
