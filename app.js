'use strict'

/////INITIALIZE ENV. VARIABLES
require('dotenv').config();

/////CONTANTS
const PORT = process.env.PORT || 8000;

///REQUIRES
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

//APP DELCARATION
const app = express();

//// GENERAL MIDDLEWARE: EFFECTS THE WHOLE app
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

///ROUTES
app.use('/images', require('./routes/images'));

///// SERVER LISTEN
app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});
