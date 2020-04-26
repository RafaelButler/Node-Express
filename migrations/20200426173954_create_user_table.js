
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table){
        table.increments().primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('city').notNullable();
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
