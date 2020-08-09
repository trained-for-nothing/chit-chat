const router = require("express").Router();
const {addPost, getAllPosts, getPost, deletePost, updatePost} = require("../controllers/post");
const { isAuthenticated } = require("../controllers");


router.post("/", addPost);
router.get("/", getAllPosts);
router.get("/:id", getPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

module.exports = router;