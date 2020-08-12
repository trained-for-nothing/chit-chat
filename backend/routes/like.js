const router = require("express").Router();
const {addLike,getAllLikes, getLikesByPostId, unLike,} = require("../controllers/like");


router.post("/", addLike);
router.get("/", getAllLikes);
router.get("/:id",getLikesByPostId);
router.delete("/:id", unLike);

module.exports = router; 