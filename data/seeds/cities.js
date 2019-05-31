exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('passports')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('passports').insert([
        { id: 1, city: 'LA' },
        { id: 2, city: 'SF' },
        { id: 3, city: 'SD' }
      ]);
    });
};
