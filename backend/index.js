const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");

const routes = require("./routes");
const Post = require("./database/models/Post");
const User = require("./database/models/User");

const port = 3000;

function createUser(params){
	User.create({
		username: "tanya",
		password: "1122",
	}).catch((err) => {
		console.log(err);
	});

}


User.sync().then(createUser);
Post.sync();



app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
	bodyParser.urlencoded({
		// to support URL-encoded bodies
		extended: true,
	})
);

app.use(cookieParser());
app.use(session({ secret: "sfgdlafsojq453523" }));

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("./public/"));

app.use(routes);

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
