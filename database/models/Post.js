const { DataTypes } = require("sequelize");
const sequelize = require(".");
const User = require("./User");

const Post = sequelize.define("Posts", {
	title: DataTypes.STRING,
	description: DataTypes.TEXT,
	likes: DataTypes.INTEGER,
});

Post.belongsTo(User);
Post.sync();

module.exports = Post;
