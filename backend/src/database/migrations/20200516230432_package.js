exports.up = function(knex) {
	return knex.schema.createTable('package', (table) => {
		table.increments();
		table.string('name').notNullable();
		table.string('description').notNullable();
		table.string('price').notNullable();
		table.boolean('status').notNullable();
	});  
};

exports.down = function(knex) {
  return knex.schema.dropTable('package');
};
