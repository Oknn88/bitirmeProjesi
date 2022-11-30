const axios = require('axios');
const { faker } = require('@faker-js/faker');
const fs = require('fs');

const reqArr = [];

for (let i = 0; i < 10000; i++) {
	reqArr.push(
		axios.create({
			baseURL: 'http://localhost:3000/user/list-all',
			params: { offset: 100, limit: 10 },
		})
	);
}

try {
	async function start() {
		await axios.all(reqArr.map((endpoint) => endpoint.get()));
	}

	start();
} catch (error) {
	console.log(error);
}
