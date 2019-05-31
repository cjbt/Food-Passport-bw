const db = require('../data/dbConfig');

const getAll = res => {
  return db('passports');
};

module.exports = {
  getAll
};
