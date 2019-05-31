exports.up = function(knex, Promise) {
  return knex.schema.createTable('passports', tbl => {
    tbl.increments();
    tbl.string('city', 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('passports');
};
