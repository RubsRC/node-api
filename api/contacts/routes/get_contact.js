'use strict';

const express = require('express');
//const Contact = require('../model/Contact');
const router = express.Router();
let contacts = require('./../../../data');

router.route('/getContact/:id')
	.get((req, res) => {

		// Metodo para seledcionar nun contacto de la base y mostrarlo
		const requestId = req.params.id;
		let contact = contacts.filter(contact => {
			return contact.id == requestId;
		});

		if (!contact[0] ) {
			res.status(404).json({ message: 'No contact found.'});
		} 

		res.json(contact[0]);		
	});

module.exports = router;

// app.get('/api/contacts/getContact/:id', (request, response) => {
// 	const requestId = request.params.id;

// 	let contact = contacts.filter(contact => {
// 		return contact.id == requestId;
// 	});

// 	if (!contact[0] ) {
// 		response.status(404).json({ message: 'No contact found.'});
// 	} 
	
// 	response.json(contact[0]);
// });