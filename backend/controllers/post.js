const Post = require("./../database/models/Post");

function addPost(req, res){
    Post.create(req.body)
        .then((s)=> {
        res.send("Post added successfully");
    }).catch((e)=> res.send("error"));
}

function getAllPosts(req, res){
    Post.findAll()
        .then((posts)=> {
        res.send((posts))
    }).catch((e)=> res.send("error"));
}

function getPost(req, res){
    Post.findOne({
        where: {
            id: req.params.id,
            }
    }).then((post) => {
        if(post){
            res.send((post))
        }
        else{
            res.send([]);
        }
    }).catch((err) => res.send("error"));
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

function updatePost(req, res){
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

module.exports = {addPost, getAllPosts, getPost, deletePost, updatePost};
