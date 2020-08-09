const router = require("express").Router();
// const { login, logout, checkUserAuthentication ,viewProfile, addPost, createPost, feed, registerUser, signup} = require("./../controllers");
const { removeAttribute } = require("../database/models/User");
const user = require('./user');
// const profile = require('./profile');
// const post = require('./post');
// const feed = require('./feed');


router.use("/user", user);
// router.use("/profile", profile);
// router.use("/post", post);
// router.use("/feed", feed);

// router.get("/signup", signup);
// router.post("/signup", registerUser);


module.exports = router;