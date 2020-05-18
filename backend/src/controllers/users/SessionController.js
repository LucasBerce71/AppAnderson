const connection = require('../../database/connection');

module.exports = {
	async createAccount (request, response) {
		const {
			name,
			email,
			username,
			password,
			confirmPassword,
			placeEvent,
			scheduleEvent,
			package_id,
			codeIndication_id
		} = request.body;

		if(confirmPassword !== password) {
			return response.status(400).json('As senhas não conferem, tente novamente!');
		}

		const [id] = await connection('user').insert({
			name,
			email,
			username,
			password,
			placeEvent,
			scheduleEvent,
			package_id,
			codeIndication_id,
			status: true
		});

		return response.json({
			message: `Seja bem vindo ${name}. O seu cadastro foi efetuado com sucesso!`,
			access: id
		});
	},

	async login(request, response) {
		const { username, password } = request.body;

		const user = await connection('user')
			.where('username', username)
			.where('password', password)
			.select('*')
			.first()

		if (!user) {
			return response.status(400).json({ error: 'Nome de usuário ou senha inválidos!' });
		}

		return response.json(`Seja bem vindo ${user.name}`);
	}
}