exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'preston',
          email: 'preston@preston.preston',
          password: 'preston'
        },
        {
          id: 2,
          username: 'shannon',
          email: 'shannon@shannon.shannon',
          password: 'shannon'
        },
        {
          id: 3,
          username: 'ashley',
          email: 'ashley@ashley.ashley',
          password: 'ashley'
        },
        {
          id: 4,
          username: 'benjamin',
          email: 'benjamin@benjamin.benjamin',
          password: 'benjamin'
        }
      ]);
    });
};
