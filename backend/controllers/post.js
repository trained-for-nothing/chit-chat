const Post = require("./../database/models/Post");

function add(req, res){
    Post.create(req.body)
        .then((s)=> {
        res.send("Post added successfully");
    }).catch((e)=> res.send("error"));
}

function getAll(req, res){
    Post.findAll()
        .then((posts)=> {
        res.send((posts))
    }).catch((e)=> res.send("error"));
}

function get(req, res){
    Post.findOne({
        where: {
            id: req.params.id,
            }
    }).then((post) => {
            res.send((post))
    })
        .catch((err) => res.send("error"));
}

function deletePost(req, res){
    Post.destroy({
        where:{
            id: req.params.id,
        }
    }).then((post) =>{
        res.send("deleted");
    })
    .catch((e)=> res.send("error"));
}

function update(req, res){
    Post.update(req.body,
        { 
            where: {
            id: req.params.id
            } 
        }
      ).then((post) => {
        res.send("updated");
    }).catch((e)=> res.send("error"));
}

module.exports = {add, getAll, get, deletePost, update};
