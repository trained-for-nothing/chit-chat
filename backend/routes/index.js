const router = require("express").Router();
const { login, logout, isAuthenticated} = require("./../controllers");
const modelUser = require("../database/models/User");
const modelPost = require("../database/models/Post");
const user = require('./user');
const post = require('./post');

router.use("/user", user);

router.use(isAuthenticated);
router.use("/post", post);
// router.get("/profile", viewProfile);
// router.get("/addPost", addPost);
// router.post("/addPost", createPost)
// router.get("/feed", feed)
// router.get("/signup", signup)
// router.post("/signup", registerUser)


module.exports = router;
