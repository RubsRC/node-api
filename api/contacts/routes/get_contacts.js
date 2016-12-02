'use strict';

const express = require('express');
//const Contact = require('../model/Contact');
const router = express.Router();
let contacts = require('./../../../data');

router.route('/getContacts')
	.get((req, res) => {
		
		// Metodo para seleccionar los contactos de BD y mostrarlos
		
		if (!contacts) {
			res.status(404).json({ message: 'No contacts found.'});
		}
		
		res.json(contacts);	
	});

 module.exports = router;

// este código estaba funcionando en server.js
// 
// app.get('/api/contacts/getContacts', (request, response) => {
// 	if (!contacts) {
// 		response.status(404).json({ message: 'No contacts found.'});
// 	}

// 	response.json(contacts);
// });

