
exports.up = function(knex) {
    return knex.schema.createTable('books', function(table){
        table.increments('book-id');

        table.string('name').notNullable();
        table.string('autor').notNullable()
        table.string('gender').notNullable()
        table.date('release_date').notNullable()

        table.boolean('avaible').defaultTo(true)
    })
};

exports.down = function(knex) {
    knex.schema.dropTable('books')
  
};
