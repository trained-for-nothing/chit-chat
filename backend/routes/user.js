const router = require("express").Router();
const User = require("../database/models/User")

// username, firstName, lastName

router.post("/", (req, res) => {
    console.log(req.body);
    User.create({...req.body}).then((v)=> {
        res.send("success");
    }).catch((e)=> res.send("error"));
})



module.exports = router;