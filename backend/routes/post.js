const router = require("express").Router();
const {add, getAll, get, deletePost, update} = require("../controllers/post");
const { isAuthenticated } = require("../controllers");


router.post("/", add);
router.get("/", getAll);
router.get("/:id", get);
router.delete("/:id", deletePost);
router.put("/:id", update);

module.exports = router;