function login(req, res) {
	if (req.session.user) {
		res.redirect("/profile");
	} else {
		res.render("login");
	}
}

function logout(req, res) {
	req.session.user = null;
	res.redirect("/login");
}

module.exports = { login, logout };
