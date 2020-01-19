const fs = require("fs");
const model = require("./index.js");

// Stringify JSON
const data = JSON.stringify(model());
fs.writeFile("database.json", data, "utf8", () => {
	console.log("📦 Database has been reset.");
	console.log("To start database run: `start`");
});
