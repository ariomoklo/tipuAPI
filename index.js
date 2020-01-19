const users = require("./model/users");
const scores = require("./model/scores");

module.exports = () => {
	const data = new Object();

	data.users = users(25, 50);
	data.scores = scores(data.users);

	return data;
};
