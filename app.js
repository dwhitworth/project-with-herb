const express = require("express");
const path = require("path");
const http = require("http");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const cookieParser= require("cookie-parser");
const ejs = require("ejs");
const session = require("express-session");
const mongoose = require("mongoose");
const nodemon = require("nodemon");
const passport = require("passport");
const passportLocal= require("passport-local");
const PORT = 3000;
// Mongoose set up page 124 

// Run Express instance 
const app = express();
// Set public folder for CSS files etc 
const publicPath = path.resolve(__dirname, "public");
// Set View engine to EJS
app.set("view engine", "ejs");
// Set views folder to views
app.set("views", path.resolve(__dirname, "views"));

// @GET Router for / page
app.get("/",(req, res) => {
  res.render("index", {
    ejsVar: "MIC CHECK!"
  });
});

// START MIDDLEWARE ------
// 404 for any URI not in routes
app.use((req, res) => {
  res.status(404);
  res.send("File not found!");
});

// Run Server
app.listen(3000, function () {
  console.log(`[*] App has started on Port ${PORT}.`);
});