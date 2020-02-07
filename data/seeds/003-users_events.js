
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users_events').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users_events').insert([
        {user_id: 1, event_id: 1},
        {user_id: 2, event_id: 1},
        {user_id: 1, event_id: 2}
      ]);
    });
};
