const User = require("../database/models/User");

const createUser = (req, res) => {
    User.create({ ...req.body }).then((data) => {
        res.json("Success");
    }).catch((e) => res.json("Failed"));
}

const getAllUsers = (req, res) => {
    User.findAll({
        attributes: ["username", "firstName", "lastName"]
    }).then((data) => {
        res.json(data);
    }).catch((e) => {
        res.json("Failed");
    })
}

const getUserById = (req, res) => {
    User.findAll({
        attributes: ["username", "firstName", "lastName"],
        where: { "id": req.params.id, }
    }).then((data) => {
        res.json(data);
    }).catch((e) => {
        res.json("Failed");
    })
}

const updateUserById = (req, res) => {
    User.update(req.body, {
        where: {
            "id": req.params.id,
        }
    }).then((data) => {
        res.json("success");
    }).catch((e) => {
        res.json("Failed");
    })
}

const deleteUser = (req, res) => {
    User.destroy({
        where: {
            "id": req.params.id,
        }
    }).then((data) => {
        res.json("success");
    }).catch((e) => {
        res.json("Failed");
    })
}


module.exports = { createUser, getAllUsers, getUserById, deleteUser, updateUserById };
