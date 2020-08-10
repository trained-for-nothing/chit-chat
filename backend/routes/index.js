const router = require("express").Router();
HEAD;
const {
  login,
  logout,
  checkUserAuthentication,
  viewProfile,
  addPost,
  createPost,
  feed,
  registerUser,
  signup,
} = require("./../controllers");
const { removeAttribute } = require("../database/models/User");
const user = require("./user");

router.use("/user", user);
router.use("/like");

router.get("/profile", viewProfile);
router.get("/addPost", addPost);
router.post("/addPost", createPost);
router.get("/feed", feed);
router.get("/signup", signup);
router.post("/signup", registerUser);

module.exports = router;
const { login, logout, isAuthenticated } = require("./../controllers");
const user = require("./user");
const post = require("./post");

router.use("/user", user);

router.use(isAuthenticated);
router.use("/post", post);

module.exports = router;
