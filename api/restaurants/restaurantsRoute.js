const express = require('express');
const db = require('./restaurantsModel');
const route = express.Router();
const { authenticate } = require('../../auth/authMiddleWare');

route.get('/', authenticate, (req, res) => {
  db.get()
    .then(rest => {
      res.json(rest);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

route.get('/:id', authenticate, (req, res) => {
  const { id } = req.params.id;
  db.getById(id)
    .then(rest => {
      if (!rest) {
        res.status(404).json({ message: 'Id doesnt exist' });
      } else {
        res.json(rest);
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

route.post('/', authenticate, (req, res) => {
  const body = req.body;
  console.log(body);
  if (!body.name || !body.city_id) {
    res.status(422).json({ message: 'missing retaurant name' });
  }
  db.insert(body)
    .then(rest => {
      res.status(201).json(rest);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

route.put('/:id', authenticate, (req, res) => {
  const id = req.params.id;
  const { name, meal, comment, city_id } = req.body;
  if (!name || !meal || !comment || !city_id) {
    res.status(404).json({ message: 'you need the fields' });
  } else if (!id) {
    res.status(404).json({ message: 'id not found' });
  }
  db.update(id, { name, meal, comment })
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

route.delete('/:id', authenticate, (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).json({ message: 'id not found' });
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
