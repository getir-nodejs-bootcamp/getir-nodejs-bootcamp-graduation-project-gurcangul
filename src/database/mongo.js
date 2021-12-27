const mongoose = require(`mongoose`);


module.exports = {
	"connect": async(mongoConfig) => {
		await mongoose.connect(mongoConfig.url, mongoConfig.options);
	},
	"disconnect": async() => {
		await mongoose.connection.close();
	},
};
