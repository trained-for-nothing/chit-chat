const router = require("express").Router();
const { login, logout, checkUserAuthentication ,viewProfile, addPost, createPost, feed, registerUser, signup} = require("./../controllers");
const { removeAttribute } = require("../database/models/User");
const user = require('./user');


router.use("/user", user);
router.use("/like", )

router.get("/profile", viewProfile);
router.get("/addPost", addPost);
router.post("/addPost", createPost)
router.get("/feed", feed)
router.get("/signup", signup)
router.post("/signup", registerUser)


module.exports = router;


get 
get with ID
post