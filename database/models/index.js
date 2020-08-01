const { Sequelize, DataTypes } = require("sequelize");

//"mysql://admin:admin@192.168.43.78:33060/chitchat"
const sequelize = new Sequelize("sqlite::memory:");

module.exports = sequelize;
