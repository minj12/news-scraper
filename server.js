const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");



const axios = require("axios");
var cheerio = require("cheerio");

// models that are required
let db = require("./models");

const PORT = 3000;

const app = express();


// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));