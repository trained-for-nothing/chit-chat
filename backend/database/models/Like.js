// const { DataTypes } = require("sequelize");
const sequelize = require(".");
const User = require("./User");
const Post = require("./Post");

const Like = sequelize.define("Likes");

Like.belongsTo(User, Post);
Like.sync();

module.exports = Like;