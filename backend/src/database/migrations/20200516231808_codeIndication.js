exports.up = function(knex) {
	return knex.schema.createTable('codeIndication', (table) => {
		table.increments();
		table.string('code').notNullable();
		table.decimal('discount').notNullable();
		table.boolean('status').notNullable();
	});  
};

exports.down = function(knex) {
  return knex.schema.dropTable('codeIndication');
};
