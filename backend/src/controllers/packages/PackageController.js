const connection = require('../../database/connection');

module.exports = {
	async createPackage(request, response) {
		const { name, description, price } = request.body;

		const [id] = await connection('package').insert({
			name,
			description,
			price,
			status: true
		});

		return response.json({
			message: `Pacote ${name} cadastrado com sucesso!`,
			access: id
		});
	}
};