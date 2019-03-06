const express = require("express");
const bodyParser = require("bodyparser")
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require ("path");



const axios = require("axios");
const cheerio = require("cheerio");

// models that are required
let db = require("./models");

// process.env Global variable is injected by the Node at runtime for application to use and it represents the state of environment your application is in when it starts.
const PORT = process.env.PORT || 3001;

var MONGODB_SCRAPE = process.env.MONGODB_SCRAPE || "mongodb://localhost/dailyHerald";

// Set mongoose to leverage built in JavaScript ES6 Promises

// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_SCRAPE);

//Start Express
const app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));


// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static({"public"}));

// Make public a static folder
app.use(express.static("public"));

const routers = require("./controller/Routes.js")
app.use(routers);

// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
