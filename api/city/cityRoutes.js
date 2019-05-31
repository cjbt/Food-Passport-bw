const express = require('express');
const db = require('./cityModel');
const route = express.Router();
const { authenticate } = require('../../auth/authMiddleWare');

route.get('/', authenticate, (req, res) => {
  db.get()
    .then(city => {
      res.json(city);
    })
    .catch(err => res.status(500).json(err));
});

route.post('/', authenticate, (req, res) => {
  const { city } = req.body;
  if (!city) {
    res.status(422).json({ message: 'Missing city field' });
  }
  db.insert({ city })
    .then(passport => {
      res.json(passport);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

route.delete('/:id', authenticate, (req, res) => {
  const { id } = req.params;
  if (!id) {
    req.status(404).json({ message: 'Cant find the ID youre looking for' });
  }
  db.del(id)
    .then(deleted => {
      res.status(200).json(deleted);
    })
    .catch(err => {
      res.status(500).status(err);
    });
});

module.exports = route;
