require('dotenv').config();

const PORT = 4000;

const BASE_URL = `http://localhost:${PORT}`;

const MERCADOPAGO_API_KEY = process.env.MERCADOPAGO_TOKEN;

module.exports = {
	PORT,
	BASE_URL,
	MERCADOPAGO_API_KEY
};

