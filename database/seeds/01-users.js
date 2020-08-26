exports.seed = function(knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          username: "temtsel",
          password: "password",
          email: "temtsel@email.com"
        },
        {
          username: "hayden",
          password: "password",
          email: "hayden@email.com"
        }
      ]);
    });
};