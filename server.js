//variable for express
const express = require("express");
const path = require("path");
var urlencode = require('urlencode');
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


const app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(methodOverride("/method"));
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

var port = process.env.PORT || 8080;
app.listen(port);
console.log("Listening on http://localhost:"+PORT)
