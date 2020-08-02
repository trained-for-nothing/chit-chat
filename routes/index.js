const router = require("express").Router();
const { login, logout, checkUserAuthentication ,viewProfile} = require("./../controllers");

router.get("/login", login);
router.get("/logout", logout);
router.post("/login", checkUserAuthentication);
router.get("/profile", viewProfile);



module.exports = router;
