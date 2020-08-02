const router = require("express").Router();
const { login, logout, checkUserAuthentication ,viewProfile, addPost, createPost} = require("./../controllers");

router.get("/login", login);
router.get("/logout", logout);
router.post("/login", checkUserAuthentication);
router.get("/profile", viewProfile);
router.get("/addPost", addPost);
router.post("/addPost", createPost)



module.exports = router;
