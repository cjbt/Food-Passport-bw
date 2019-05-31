const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'cj',
          email: 'cj@cj.cj',
          password: bcrypt.hashSync('i<3Lambd4', 10)
        },
        {
          id: 2,
          username: 'admin',
          email: 'admin',
          password: bcrypt.hashSync('admin', 10)
        }
      ]);
    });
};
