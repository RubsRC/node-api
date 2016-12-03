'use strict';

const express = require('express');
const app =  express();
const bodyParser = require('body-parser');
const cors = require('cors');
let contacts = require('./data');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/contacts', require('./api/contacts/routes/get_contacts'));
app.use('/api/contacts', require('./api/contacts/routes/get_contact'));
app.use('/api/contacts', require('./api/contacts/routes/post_contact'));
app.use('/api/contacts', require('./api/contacts/routes/put_contact'));
app.use('/api/contacts', require('./api/contacts/routes/delete_contact'));

// const hostname = 'localhost';
const hostname = '162.209.96.163';
const port = 3001;

app.listen(port, hostname, () => {

	// TODO: conexion a mysql
	console.log(`Server is runnig at http://${hostname}:${port}`);
});