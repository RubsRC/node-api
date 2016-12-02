'use strict';

const express = require('express');
//const Contact = require('../model/Contact');
const router = express.Router();
let contacts = require('./../../../data');

router.route('/deleteContact/:id')
	.delete((req, res) => {
		const requestId = req.params.id;
		
		let contact = contacts.filter(contact => {
			return contact.id == requestId;
		})[0];

		const index = contacts.indexOf(contact);
		contacts.splice(index, 1);
		res.json({ message: `User ${requestId} deleted.` });
	});

module.exports = router;


// app.delete('/api/contacts/deleteContact/:id', (request, response) => {
// 	const requestId = request.params.id;

// 	let contact = contacts.filter(contact => {
// 		return contact.id == requestId;
// 	})[0];

// 	const index = contacts.indexOf(contact);

// 	contacts.splice(index, 1);

// 	response.json({ message: `User ${requestId} deleted.` });
// })