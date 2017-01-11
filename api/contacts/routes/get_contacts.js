/*jshint esversion: 6 *//* jshint node: true */
'use strict';

const express = require('express');
let pool = require('./../../../connection');
//const Contact = require('../model/Contact');
const router = express.Router();

router.route('/getContacts')
  .get((req, res) => {
    pool.getConnection((err, connection) => {
      connection.query('SELECT * FROM cat_empresa;', (err, rows) => {
        if (err) {
          res.status(404).json({ message: 'No contacts found. '});
          console.log('Error while performing query.');
          console.error(err);
          return;
        }
        res.json(rows);
        connection.release();
      });
    });
  });

 module.exports = router;