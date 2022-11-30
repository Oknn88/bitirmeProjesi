const { faker } = require('@faker-js/faker');
const User = require('./models').User;
const bcrypt = require('bcrypt');

const userArr = [];

async function userBulkCreate() {
	for (let i = 0; i < 10000; i++) {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(faker.internet.password(10), salt);

		userArr.push({
			email: faker.internet.email(),
			password: faker.internet.password(10),
		});
	}
	try {
		await User.bulkCreate(userArr);
	} catch (error) {
		console.log(error);
	}
}

userBulkCreate();
