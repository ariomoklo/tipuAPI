const users = require("./model/users");

module.exports = () => {
	return {
		users: users(25, 100)
	};
};
