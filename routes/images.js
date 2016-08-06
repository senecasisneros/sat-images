'use strict'

const express = require('express');
const router = express.Router();

let Image = require('../models/image');

/////// GET ////////////
router.get('/', (req, res) => {
  Image.getAll()
  .then(images => {
    res.send(images);
  })
  .catch(err => {
    res.status(400).send(err);
  });
})

/////// POST ////////////
router.post('/', (req, res) => {
  Image.create(req.body)
  .then(() => {
    res.send()
  })
  .catch(err => {
    res.status(400).send(err);
  });
});


//////////  UPDATE  ////////////
router.put('/:id', (req, res) => {
  Image.update(req.params.id, req.body)
  .then(() => {
    res.send();
  })
  .catch(err => {
    res.status(400).send(err);
  });
});

//////////  DELETE  ////////////
router.delete('/:id', (req, res) => {
  Image.delete(req.params.id)
  .then(() => {
    res.send();
  })
  .catch(err => {
    res.status(400).send(err);
  });
})


module.exports = router;
