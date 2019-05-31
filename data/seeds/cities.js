exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('passports')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('passports').insert([
        { id: 1, city: 'Los Angeles' },
        { id: 2, city: 'Eugene' },
        { id: 3, city: 'San Diego' }
      ]);
    });
};
