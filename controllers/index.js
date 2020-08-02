const User = require("./../database/models/User");
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
function checkUserAuthentication(req, res){
	let username = req.body.username;
	let password = req.body.password;
	User.findOne({
		username: username,
	})
		.then((user) => {
			if (user.password == password) {
				req.session.user = user;
				res.redirect("/profile");
			} else {
				res.send("wrong pass");
			}
		})
		.catch((err) => {
			res.send("somthing went worng");
		});
}

function viewProfile (req, res){
	//console.log(req.session);
	if (req.session.user) {
		res.render("profile");
	} else {
		res.redirect("/login");
	}
}

module.exports = { login, logout, checkUserAuthentication, viewProfile};
