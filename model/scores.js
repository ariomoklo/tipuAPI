const faker = require("faker");
faker.locale = "id_ID";

const score = (index, userid) => {
	return {
		id: index,
		userId: userid,
		score: Math.floor(Math.random() * 101) + 1,
		date: faker.date.between("01/01/2019", "01/12/2019")
	};
};

module.exports = users => {
	let scores = [];
	for (let i = 0; i < users.length; i++) {
		const user = users[i];
		scores.push(score(i, user.id));
	}

	return scores;
};
