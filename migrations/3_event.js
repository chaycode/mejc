exports.up = function(knex, Promise) {
  return knex.schema.createTable('event', function(table) {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('location').notNullable();
    table.string('address').notNullable();
    table.date('start_date');  // Format: YYYY-MM-DD
    table.date('end_date');
    table.time('start_time');  // Format: HH:MI:SS
    table.time('end_time');
    table.text('description').notNullable();
    table.integer('available_positions').notNullable();
    table.integer('registed_volunteers').notNullable();
    table.integer('organization_id')
      .references('organization.id')
      .onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('event')
};
