const faker = require("faker");
faker.locale = "id_ID";

const user = index => {
	return {
		id: index,
		name: faker.name.findName(),
		email: faker.internet.email(),
		company: faker.company.companyName()
	};
};

module.exports = (min = 10, max = 100) => {
	const total = Math.floor(Math.random() * max) + min;

	let users = [];
	for (let index = 0; index < total; index++) {
		users.push(user(index));
	}

	return users;
};
