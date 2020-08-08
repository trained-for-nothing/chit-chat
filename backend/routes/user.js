const router = require("express").Router();
const {createUser, getAllUsers, getUserById, deleteUser, updateUser} = require("../controllers/user");


router.post("/", createUser);
router.get("/",getAllUsers);
router.get("/:id",getUserById);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;