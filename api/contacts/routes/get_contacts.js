/*jshint esversion: 6 *//* jshint node: true */
'use strict';

const express = require('express');
let connection = require('./../../../connection');
//const Contact = require('../model/Contact');
const router = express.Router();
let contacts = require('./../../../data');

router.route('/getContacts')
	.get((req, res) => {
		console.log(connection);
		connection.query('SELECT * FROM cat_empresa;', (err, rows) => {
			if (err) {
				res.status(404).json({ message: 'No contacts found. '});
				console.log('Error while performing query.');
				console.error(err);
				return;
			}
			res.json(rows);
		});
		connection.end();
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

