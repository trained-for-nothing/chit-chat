const { DataTypes } = require("sequelize");
const sequelize = require(".");

const User = sequelize.define("Users", {
	username: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
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

module.exports = User;
