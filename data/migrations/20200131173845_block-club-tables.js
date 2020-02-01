
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.string('username').unique().notNullable();
      tbl.string('password').notNullable();
      tbl.string('email').notNullable();
      tbl.string('streetAddress').notNullable();
      tbl.string('city').notNullable();
      tbl.string('zipcode').notNullable();
      tbl.string('businessName').nullable();
      tbl.boolean('organization').defaultTo(false);
  })
  .createTable('events', tbl => {
      tbl.increments();
      tbl.string('eventTitle').notNullable();
      tbl.string('geolocation').notNullable();
      tbl.text('eventDescription').notNullable();
      tbl.datetime('eventStart').notNullable();
      tbl.datetime('eventEnd').notNullable();
      tbl.string('externalLink').nullable();
  })
  .createTable('users_events', tbl => {
      tbl.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      tbl.integer('event_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('events')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      tbl.primary(['user_id', 'event_id'])
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users_events')
  .dropTableIfExists('events')
  .dropTableIfExists('users')
};
