const express = require("express");
const bodyParser = require("body-parser")
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require ("path");


// models that are required
const db = require("./models");

// process.env Global variable is injected by the Node at runtime for application to use and it represents the state of environment your application is in when it starts.
const PORT = process.env.PORT || 3001;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/dailyHerald";

// Set mongoose to leverage built in JavaScript ES6 Promises

// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

//Start Express
const app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));


// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({extended: true}));

// Make public a static folder
app.use(express.static("public"));

const routers = require("./controller/Routes.js")
app.use(routers);

// Express and Handlebars run
 
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Start the server
app.listen(PORT, function () {
  console.log("App is running on port " + PORT + "!");
});
