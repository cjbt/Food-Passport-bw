exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', tbl => {
    tbl.increments();
    tbl.string('name').notNullable();
    tbl.string('meal');
    tbl.string('comment');
    tbl
      .integer('city_id')
      .unsigned()
      .references('id')
      .inTable('passports')
      .notNullable();
  });
};

exports.down = function(knex, Promise) {};
