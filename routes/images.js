'use strict'

const express = require('express');
const router = express.Router();

let Image = require('../models/image');

// Image (titlecased singular) ------> model
// Image (lowercased singular) ------> one image object
// Image (lowercased plural) ------> array of image objects

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

/////// GET ONE ////////////
router.get('/:id', (req, res) => {
  Image.getOne(req.params.id)
  .then(image => {
    res.send(image);
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
    return Image.getOne(req.params.id);
  })
  .then(image => {
    res.send(image);
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
