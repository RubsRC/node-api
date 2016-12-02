'use strict';

const express = require('express');
const app =  express();
const bodyParser = require('body-parser');
const cors = require('cors');
let contacts = require('./data');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/contacts/getContacts', (request, response) => {
	if (!contacts) {
		response.status(404).json({ message: 'No contacts found.'});
	}
	
	response.json(contacts);
});

app.get('/api/contacts/getContact/:id', (request, response) => {
	const requestId = request.params.id;

	let contact = contacts.filter(contact => {
		return contact.id == requestId;
	});

	if (!contact[0] ) {
		response.status(404).json({ message: 'No contact found.'});
	} 
	
	response.json(contact[0]);
});

app.post('/api/contacts/newContact', (request, response) => {
	const contact = {
		id: contacts.length + 1,
		first_name: request.body.first_name,
		last_name: request.body.last_name,
		email: request.body.email,
		website: request.body.website
	}

	contacts.push(contact);

	response.json(contact);
});

app.put('/api/contacts/updateContact/:id', (request, response) => {
	const requestId = request.params.id;

	let contact = contacts.filter(contact => {
		return contact.id == requestId;
	})[0];

	const index = contacts.indexOf(contact);
	const keys = Object.keys(request.body);

	keys.forEach(key => {
		contact[key] = request.body[key];
	});

	contacts[index] = contact;

	response.json(contacts[index]);
});

const hostname = 'localhost';
const port = 3001;

app.listen(port, hostname, () => {
	console.log(`Server is runnig at http://${hostname}:${port}`);
});