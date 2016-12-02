'use strict';

const SchemaObject = require('node-schema-object');

const Contact = new SchemaObject({
	first_name: String,
	last_name: String,
	email: String,
	website: String
});

module.exports = Contact;