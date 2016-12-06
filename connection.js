/*jshint esversion: 6 *//* jshint node: true */
'use strict';

var mysql = require('mysql');		
var connection;

function connectDatabase () {
	if (!connection) {
		connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'itzanma_pypol'
		});

		connection.connect((err) => {
			if (err) {
				console.log(`MySQL error connecting ${err.stack}`);
				return;
			}
			console.log(`Connected to MySQL as id ${connection.threadId}`);
		});
	}
	return connection;
}

module.exports = connectDatabase();	
	
