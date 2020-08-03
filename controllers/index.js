const User = require("./../database/models/User");
const Post = require("./../database/models/Post")
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
		fetchUserDetails(req,res).then((user) => {
			res.render("profile",{
				username: user.username,
				fname: user.firstName,
				lname: user.lastName
			})

		})
	} else {
		res.redirect("/login");
	}
}

function fetchUserDetails(req, res){
	return new Promise((resolve, reject) => {
		User.findOne({
			username: req.session.user,
		})
		.then((user)=> {
			resolve(user)
		}).catch((err) => reject(err));
	})
	
}


function addPost(req, res) {
	if (req.session.user) {
		res.render("addPost");
	} else {
		res.redirect("/login");
	}
}



function createPost(req, res){
	if(req.session.user){
		Post.create({
			title: req.body.title,
			description: req.body.description,
			UserId : req.session.user.id			
		})
		.then(()=> {
			res.redirect("/addPost");
		})
		.catch((error)=>{
			res.send(err);
		})
	} else {
		res.redirect("/login");
	}
	
}

function feed(req, res){
	if (req.session.user) {
		fetchPost(req,res).then((post) => {
			res.render("feed",{
				// title:post.title,
				// description:post.description,
				post:post,
				username:req.session.user.username
			})

		})
	} else {
		res.redirect("/login");
	}
}

 function fetchPost(req, res){
	return new Promise((resolve, reject) => {
		Post.findAll({
			UserId:req.session.user.id
		})
		.then((post)=> {
			resolve(post)
		}).catch((error) => reject(error));
	});
 }
module.exports = { login, logout, checkUserAuthentication, viewProfile, addPost, createPost, feed};
