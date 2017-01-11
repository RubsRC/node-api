/*jshint esversion: 6 *//* jshint node: true */
'use strict';

const mysql = require('mysql');		
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

const pool = mysql.createPool({
	  connectionLimit: 10,
	  host: config.database.host,
	  user: config.database.user,
	  password: config.database.password,
	  database: config.database.dbName
  });

module.exports = pool;

	
