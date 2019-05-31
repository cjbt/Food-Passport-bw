const db = require('../../data/dbConfig');

const get = () => {
  const query = db('passports');

  let promises;
  const result = query.map(item => {
    promises = [item, getRestaurantsById(item.id)];
    return Promise.all(promises).then(completed => {
      let [cities, restaurants] = completed;
      cities = {
        ...completed[0],
        restaurants
      };
      return cities;
    });
  });
  return result;
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
