
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          id: 1,
          eventTitle: "Missoula County Fair",
          geolocation: "46.848890,-114.013930",
          eventDescription: "Missoula county's annual Fair and Rodeo",
          eventStart: "2020-2-13 8:00",
          eventEnd: "2020-2-17 12:00",
          externalLink: ""
        },
        {
          id: 2,
          eventTitle: "Another Event",
          geolocation: "46.848890,-114.013930",
          eventDescription: "Missoula county's annual Fair and Rodeo",
          eventStart: "2020-2-13 8:00",
          eventEnd: "2020-2-17 12:00",
          externalLink: ""
        },
        {
          id: 3,
          eventTitle: "Some Other Event",
          geolocation: "46.848890,-114.013930",
          eventDescription: "Missoula county's annual Fair and Rodeo",
          eventStart: "2020-2-13 8:00",
          eventEnd: "2020-2-17 12:00",
          externalLink: ""
        }
      ]);
    });
};
