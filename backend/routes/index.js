const router = require("express").Router();
const { login, logout, isAuthenticated} = require("./../controllers");
const user = require('./user');
const post = require('./post');

router.use("/user", user);

router.use(isAuthenticated);
router.use("/post", post);


module.exports = router;