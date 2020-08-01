const router = require("express").Router();
const { login, logout } = require("./../controllers");

router.get("/login", login);
router.get("/logout", logout);

router.get("/profile", (req, res) => {
	console.log(req.session);
	if (req.session.user) {
		res.render("profile");
	} else {
		res.redirect("/login");
	}
});

router.post("/login", (req, res) => {
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
});

module.exports = router;
