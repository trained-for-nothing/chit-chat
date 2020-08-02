const router = require("express").Router();
const { login, logout, checkUserAuthentication ,viewProfifle} = require("./../controllers");

router.get("/login", login);
router.get("/logout", logout);
router.post("/login", checkUserAuthentication);
router.get("/profile", viewProfifle);



module.exports = router;
