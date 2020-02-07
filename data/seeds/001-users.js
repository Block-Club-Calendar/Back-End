
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: "DFink",
          password: "password",
          email: "email@email.com",
          streetAddress: "123 abc st.",
          zipcode: "59802",
          city: "missoula",
          businessName: "",
          organization: false
        },
        {
          id: 2,
          username: "DFink1",
          password: "password",
          email: "email@email.com",
          streetAddress: "123 abc st.",
          zipcode: "59802",
          city: "missoula",
          businessName: "",
          organization: false
        },
        {
          id: 3,
          username: "DFink2",
          password: "password",
          email: "email@email.com",
          streetAddress: "123 abc st.",
          zipcode: "59802",
          city: "missoula",
          businessName: "",
          organization: false
        }
      ]);
    });
};
