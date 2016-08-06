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


////ROUTES //////

let Image = require('./models/image');



/////// GET ////////////
app.get('/images', (req, res) => {
  Image.getAll()
  .then(images => {
    res.send(images);
  })
  .catch(err => {
    res.status(400).send(err);
  });
})

/////// POST ////////////
app.post('/images', (req, res) => {
  Image.create(req.body)
    .then(() => {
      res.send()
    })
    .catch(err => {
      res.status(400).send(err);
    });
});


///// SERVER LISTEN
app.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});
