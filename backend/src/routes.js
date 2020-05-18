const express = require('express');

const { celebrate, Joi, Segments } = require('celebrate');

const User = require('./controllers/users/SessionController');

const Package = require('./controllers/packages/PackageController');

const routes = express.Router();

routes.get('/', (request, response) => {
	return response.json("Seja Bem Vindo ao AppAnderson");
});

routes.post('/users/register', celebrate({
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required().messages({
			"any.required": "O campo NOME deve ser informado para realizar o cadastro!",
			"string.empty": "O campo NOME deve ser preenchido corretamente!",
		}),

		email: Joi.string().required().min(7).messages({
			"any.required": "O campo EMAIL deve ser informado para realizar o cadastro!",
			"string.empty": "O campo EMAIL deve ser preenchido corretamente!",
			"string.min": "O campo EMAIL deve ser preenchido em um formato válido!",
		}),

		username: Joi.string().required().messages({
			"any.required": "O campo NOME DE USUÁRIO deve ser informado para realizar o cadastro!",
			"string.empty": "O campo NOME DE USUÁRIO deve ser preenchido corretamente!",
		}),

		password: Joi.string().required().messages({
			"any.required": "O campo SENHA deve ser informado para realizar o cadastro!",
			"string.empty": "O campo SENHA deve ser preenchido corretamente!",
		}),

		confirmPassword: Joi.string().required().messages({
			"any.required": "Confirme sua senha para realizar o cadastro!",
			"string.empty": "Confirme sua senha corretamente!",
		}),

		placeEvent: Joi.string().required().messages({
			"any.required": "O campo LOCAL DO EVENTO deve ser informado para realizar o cadastro!",
			"string.empty": "O campo LOCAL DO EVENTO deve ser preenchido corretamente!",
		}),

		scheduleEvent: Joi.string().required().min(5).max(5).messages({
			"any.required": "O campo HORÁRIO DO EVENTO deve ser informado para realizar o cadastro!",
			"string.empty": "O campo HORÁRIO DO EVENTO deve ser preenchido corretamente!",
			"string.min": "HORÁRIO DO EVENTO inválido!",
			"string.max": "HORÁRIO DO EVENTO inválido!",
		}),

		package_id: Joi.number().required().messages({
			"number.required": "O campo ESCOLHA SEU PACOTE deve ser informado para realizar o cadastro!",
			"number.base": "O campo ESCOLHA SEU PACOTE deve ser preenchido corretamente!",
		}),

		codeIndication_id: Joi.number()
	})
}), User.createAccount);

routes.post('/users/login', celebrate({
	[Segments.BODY]: Joi.object().keys({
		username: Joi.string().required().messages({
			"any.required": "O campo USERNAME deve ser informado para realizar o login!",
			"string.empty": "O campo USERNAME deve ser preenchido corretamente!",
		}),

		password: Joi.string().required().messages({
			"any.required": "O campo SENHA deve ser informado para realizar o login!",
			"string.empty": "O campo SENHA deve ser preenchido corretamente!",
		}),
	})
}), User.login);

routes.post('/packages/register', celebrate({
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required().messages({
			"any.required": "O campo NOME DO PACOTE deve ser informado para realizar o cadastro do pacote!",
			"string.empty": "O campo NOME DO PACOTE deve ser preenchido corretamente!",
		}),

		description: Joi.string().required().messages({
			"any.required": "O campo DESCRIÇÃO DO PACOTE deve ser informado para realizar o cadastro do pacote!",
			"string.empty": "O campo DESCRIÇÃO DO PACOTE deve ser preenchido corretamente!"
		}),

		price: Joi.string().required().min(7).messages({
			"any.required": "O campo PREÇO DO PACOTE deve ser informado para realizar o cadastro do pacote!",
			"string.empty": "O campo PREÇO DO PACOTE deve ser preenchido corretamente!",
		})
	})
}), Package.createPackage);

module.exports = routes;