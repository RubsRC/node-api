'use strict';

const express = require('express');
//const Contact = require('../model/Contact');
const router = express.Router();
let contacts = require('./../../../data');

router.route('/updateContact/:id')
	.put((req, res) => {
		const requestId = req.params.id;

		let contact = contacts.filter(contact => {
			return contact.id == requestId;
		})[0];

		const index = contacts.indexOf(contact);
		const keys = Object.keys(req.body);
		keys.forEach(key => {
			contact[key] = req.body[key];
		});

		contacts[index] = contact;
		res.json(contacts[index]);
	});

module.exports = router;


// app.put('/api/contacts/updateContact/:id', (request, response) => {
// 	const requestId = request.params.id;

// 	let contact = contacts.filter(contact => {
// 		return contact.id == requestId;
// 	})[0];

// 	const index = contacts.indexOf(contact);
// 	const keys = Object.keys(request.body);

// 	keys.forEach(key => {
// 		contact[key] = request.body[key];
// 	});

// 	contacts[index] = contact;

// 	response.json(contacts[index]);
// });