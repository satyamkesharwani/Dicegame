var express = require("express");
var app = express();
const path = require("path");
// const middleware = require("./middleware");
const MongoClient = require("./database");
// const session = require("express-session");
const bodyParser = require("body-parser");
const Post = require("./schema");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3003;

// set the view engine to ejs
app.set("view engine", "pug");
app.set("views", "views");

// make express look in the public directory for assets (css/js/img)
// app.use(express.static(__dirname + "/public"));

// set the home page route
// app.get("/", function (req, res) {
//   // ejs render automatically looks in the views folder
//   res.render("index");
// });

app.listen(port, function () {
  console.log("Our app is running on http://localhost:" + port);
});
app.get("/", (req, res, next) => {
  var payload = {
    pageTitle: "Home",
  };

  res.status(200).render("home", payload);
})

app.post("/", (req, res, next) => {
  data = req.body;
  Post.create(data).then(() => {
    console.log("post successful", data)
  }).catch((err) => console.log(err));
})


