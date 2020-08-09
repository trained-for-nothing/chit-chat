const User = require("./../database/models/User");

function createUser(req, res){
    User.create(req.body)
        .then((s)=> {
        res.send("successfully created");
    }).catch((e)=> res.send("error"));
}

function getAllUsers(req, res){
    User.findAll()
        .then((users)=> {
        res.send(JSON.stringify(users))
    }).catch((e)=> res.send("error"));
}

function getUserById(req, res){
    User.findOne({
        where: { id: req.params.id,}
    }).then((user) => {
        if (user) {
            res.send((user))
        } else {
            res.send([]);
        }
    })
        .catch((err) => res.send("error"));
}

function deleteUser(req, res){
    User.destroy({
        where:{
            id: req.params.id,
        }
    }).then((user) =>{
        res.send("deleted");
    })
    .catch((e)=> res.send("error"));
}

function updateUser(req, res){
    User.update(req.body,
        { 
            where: {id: req.params.id} 
        }
      ).then((user) => {
        res.send("updated");
    }).catch((e)=> res.send("error"));
}

module.exports = {createUser, getAllUsers, getUserById, deleteUser, updateUser};
