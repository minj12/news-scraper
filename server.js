const express = require("express");
const bodyParser = require("bodyparser")
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require ("path");



const axios = require("axios");
var cheerio = require("cheerio");

// models that are required
let db = require("./models");

// process.env Global variable is injected by the Node at runtime for application to use and it represents the state of environment your application is in when it starts.
const PORT = process.env.PORT || 3001;

var MONGODB_URI = PROCESS

const app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));