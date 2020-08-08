const router = require("express").Router();
const { login, logout, checkUserAuthentication ,viewProfile, addPost, createPost, feed} = require("./../controllers");
const { removeAttribute } = require("../database/models/User");
const user = require('./user');


router.use("/user", user);
router.use("/like", )

router.get("/profile", viewProfile);
router.get("/addPost", addPost);
router.post("/addPost", createPost)
router.get("/feed", feed)



module.exports = router;


get 
get with ID
post