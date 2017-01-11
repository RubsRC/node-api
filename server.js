/*jshint esversion: 6 *//* jshint node: true */
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pug = require('pug');
let pool = require('./connection');
let contacts = require('./data');

const app =  express();

// js template to use pug 
app.set('views', './views');
app.set('view engine', 'pug');

// dependencies to handle the http request with express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// show home page
app.get('/', (req, res) => {
	res.render('index', {
		title: 'Welcome to my node.js api'
	});
});

app.use('/api/contacts', require('./api/contacts/routes/get_contacts'));
app.use('/api/contacts', require('./api/contacts/routes/get_contact'));
app.use('/api/contacts', require('./api/contacts/routes/post_contact'));
app.use('/api/contacts', require('./api/contacts/routes/put_contact'));
app.use('/api/contacts', require('./api/contacts/routes/delete_contact'));

const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];
const hostname = config.server.host;
const port = config.server.port;

app.listen(port, hostname, () => {
		pool.getConnection(function(err, connection) {
			if (err) {
				console.error('Problems connecting to MySQL.');
				console.error(err);
				return;
			}
			console.log(`Server is runnig at http://${hostname}:${port}`);
			console.log(`Connected to MySQL as id ${connection.threadId}.`);
			connection.release();
		});
});