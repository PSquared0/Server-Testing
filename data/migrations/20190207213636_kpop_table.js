
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bands', table=> {
    // we must use the callback syntax for .createTable()
    table.increments(); // pass the name if you wanted to be called anything other than id
    table
      .string('band_name', 100).notNullable();
      table.integer('years_active').unsigned();
      table
      .string('hit_song', 200).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bands');
};
