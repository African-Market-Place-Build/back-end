exports.seed = function(knex) {
  return knex('items').del()
    .then(function () {
      return knex('items').insert([
        {
          user_id: 1,
          name: "iPhone X",
          category: "phones",
          description: "used",
          location: "Lagos, Nigeria",
          contactInfo: "temtsel@email.com",
          price: "$349.99"
        },
        {
          user_id: 1,
          name: "iPhone 11",
          category: "phones",
          description: "used",
          location: "Lagos, Nigeria",
          contactInfo: "temtsel@email.com",
          price: "$499.99"
        },{
          user_id: 2,
          name: "Macbook Air 2020",
          category: "laptops",
          description: "new",
          location: "Nairobi, Kenya",
          contactInfo: "hayden@email.com",
          price: "$999.99"
        },
        {
          user_id: 2,
          name: "iPad Pro 3rd Gen",
          category: "tablets",
          description: "used",
          location: "Nairobi, Kenya",
          contactInfo: "hayden@email.com",
          price: "$449.99"
        }
      ]);
    });
};

