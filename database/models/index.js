const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
	"mysql://admin:admin@192.168.43.78:33060/chitchat"
);

module.exports = sequelize;
