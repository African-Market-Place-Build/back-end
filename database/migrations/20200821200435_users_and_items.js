exports.up = function(knex) {
    return knex.schema
        .createTable('users', table => {
            table.primary("id")
                .increments()
                .unique();
            table.string('username', 255)
                .notNullable()
                .unique();
            table.string('password', 255)
                .notNullable();
            table.string("email", 255)
                .notNullable()
                .unique();
            table.string("imageLink")
        })
        .createTable("items", table => {
            table.primary("id")
                .increments()
                .unique();
            table.foreign('user_id')
                .integer()
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
            table.string("name")
                .notNullable();
            table.string("category")
                .notNullable();
            table.string("description")
                .notNullable();
            table.string("location")
                .notNullable();
            table.string("contactInfo")
                .notNullable();
            table.string("price")
                .notNullable();
            table.string("imageLink");
        });
};
  
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('items');
};
  
