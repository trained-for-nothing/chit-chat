const router = require("express").Router();
const User = require("../database/models/User");
const {createUser, getAllUsers, getUserById, deleteUser, updateUserById} = require("../controllers/user")


router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUser);

module.exports = router;