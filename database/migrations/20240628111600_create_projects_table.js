exports.up = function(knex) {
    return knex.schema.createTable('projects', function(table) {
        table.increments('id');
        table.string('title');
        table.string('role');
        table.string('lang');
        table.string('year');
        table.timestamp('added_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('projects');
};
