const db = require('../../data/dbConfig');

const get = () => {
  const query = db('passports');
 
  return query;
};

const getRestaurantsById = id => {
  return db('restaurants').where({ city_id: id });
};

const insert = passport => {
  return db('passports').insert(passport);
};

const del = id => {
  return db('passports')
    .where({ id })
    .del();
};

module.exports = {
  get,
  getRestaurantsById,
  insert,
  del
};
