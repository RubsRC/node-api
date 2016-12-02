'use strict';

const express = require('express');
//const Contact = require('../model/Contact');
const router = express.Router();
let contacts = require('./../../../data');

router.route('/newContact')
	.post((req, res) => {
		
		// metodos necesarios para guardar el contcato en la BD 
		
		const contact = {
			id: contacts.length + 1,
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			website: req.body.website
		}

		contacts.push(contact);
		res.json(contact);
	});

module.exports = router;

// app.post('/api/contacts/newContact', (request, response) => {
// 	const contact = {
// 		id: contacts.length + 1,
// 		first_name: request.body.first_name,
// 		last_name: request.body.last_name,
// 		email: request.body.email,
// 		website: request.body.website
// 	}

// 	contacts.push(contact);

// 	response.json(contact);
// });