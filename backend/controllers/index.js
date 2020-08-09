const User = require("./../database/models/User");
const Post = require("./../database/models/Post");
const { Router } = require("express");

function login(req, res) {
	res.render("login");
}

function logout(req, res) {
	req.session.user = null;
	res.redirect("/login");
}

function isAuthenticated(req, res, next) {
	if (req.session.user){
        next();
    } else {
		res.send("Not Authorised");
	}
}

module.exports = {login, logout, isAuthenticated};
