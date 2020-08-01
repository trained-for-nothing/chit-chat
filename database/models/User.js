const { DataTypes } = require("sequelize");
const sequelize = require(".");

const User = sequelize.define("User", {
	username: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	firstName: {
		type: DataTypes.STRING,
	},
	lastName: {
		type: DataTypes.STRING,
	},
});

User.sync();

module.exports = User;
