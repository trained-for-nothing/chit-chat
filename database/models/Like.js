const { DataTypes } = require("sequelize");
const sequelize = require(".");
const Post =require("./Post");
const User = require("./User");

const Like = sequelize.define("Likes");

Like.belongsTo(User);
Like.belongsTo(Post);

Like.sync();

module.exports = Like;