require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var passport = require("passport");
var mongoose = require("mongoose");

var indexRouter = require("./app_server/routes/index");
var usersRouter = require("./app_server/routes/users");
var travelRouter = require("./app_server/routes/travel");
var apiRouter = require("./app_api/routes/index");

var handlebars = require("hbs");

// Bring in the database
require("./app_api/models/db");

// bring in passport
require("./app_api/config/passport");

// Bring in Schemas
require("./app_api/models/travlr");
require("./app_api/models/user");

var app = express();

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

// View engine setup
app.set("views", path.join(__dirname, "app_server", "views"));

// Register handlebars partials
handlebars.registerPartials(__dirname + "/app_server/views/partials");

app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());

// Wire-up routes to controllers
app.use("/api", apiRouter);
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/travel", travelRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("error");
});

// catch unauthorized error and create 401
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ message: err.name + ": " + err.message });
  }
});

// check for silent failures
process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception:", err);
});

process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection:", err);
});

module.exports = app;
