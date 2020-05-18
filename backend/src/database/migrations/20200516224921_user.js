exports.up = function(knex) {
	return knex.schema.createTable('user', (table) => {
		table.increments();
		table.string('name').notNullable();
		table.string('email').notNullable();
		table.string('username').notNullable();
		table.string('password').notNullable();
		table.string('placeEvent').notNullable();
		table.string('scheduleEvent').notNullable();
		table.int('package_id').notNullable();
		table.int('codeIndication_id').notNullable();
		table.boolean('status').notNullable();
		table.foreign('package_id').references('id').inTable('package');
		table.foreign('codeIndication_id').references('id').inTable('codeIndication');
	});  
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
