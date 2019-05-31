const db = require('../../data/dbConfig');

const get = () => {
  return db('restaurants');
};

const getById = id => {
  return db('restaurants')
    .where({ id })
    .first();
};

const insert = restaurant => {
  return db('restaurants').insert(restaurant);
};

const update = (id, changes) => {
  return db('restaurants')
    .where({ id })
    .update(changes);
};

const del = id => {
  return db('restaurants')
    .where({ id })
    .del();
};

module.exports = {
  get,
  getById,
  insert,
  update,
  del
};
