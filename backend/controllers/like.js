const Like = require("./../database/models/Like");

function addLike(req, res){
    Like.create({	
        PostId:req.body.PostId,
        UserId:req.session.user.id,
        username=req.session.user.username,
    }).then((s)=> {
        res.json("Liked successfully");
    }).catch((e)=> res.json("error"));
}

function getAllLikes(req, res){
    Like.findAll({
        attributes: ["username"]
        }).then((s)=> {
            res.json((s))
        }).catch((e)=> res.json("error"));
}
function getLikesByPostId(req, res){
    Like.findAll({
        attributes: ["username"],
        where: {
            PostId=req.params.PostId,
            }
    }).then((s) => {
        res.json(s);
    }).catch((error) => {
        res.json("error");
    })
}

function unLike(req, res){
    Like.destroy({
        where: {
            PostId=req.params.PostId,
            username=req.session.user.username,
            }
    }).then((s) =>{
        res.json("deleted");
    })
    .catch((e)=> res.json("error"));

}


module.exports = {addLike, getAllLikes, getLikesByPostId, unLike};
