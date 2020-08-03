const router = require("express").Router();
const { login, logout, checkUserAuthentication ,viewProfile, addPost, createPost, feed} = require("./../controllers");
const { removeAttribute } = require("../database/models/User");

router.get("/login", login);
router.get("/logout", logout);
router.post("/login", checkUserAuthentication);
router.get("/profile", viewProfile);
router.get("/addPost", addPost);
router.post("/addPost", createPost)
router.get("/feed", feed)



module.exports = router;
