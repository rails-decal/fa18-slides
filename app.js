const express = require("express");
const basicAuth = require("express-basic-auth");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const IS_DEV = app.get("env") === "development";

const weeksAvailable = fs.readdirSync(
  path.join(__dirname, "public/slides")
).map(week => week.substring(0, week.indexOf(".")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  if ("OPTIONS" == req.method) {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.static(path.join(__dirname, "public")));

let currentWeek = "week01";

app.get("/:week", function(req, res) {
  if (!~weeksAvailable.indexOf(req.params.week)) {
    return res.status(404).send("We couldn't find the lecture you're looking for.");
  }
  res.render("slides", {
    week: req.params.week,
    number: +req.params.week.split("week").pop(),
    student: true
  });
});

app.get("/", function(req, res) {
  if (currentWeek) {
    return res.redirect(`/${currentWeek}`);
  }
});

app.use("/teach", basicAuth({
  users: { "presenter": process.env.SECRET },
  challenge: true
}));

app.get("/teach/:week", function(req, res) {
  currentWeek = req.params.week;
  res.render("slides", {
    week: req.params.week,
    number: +req.params.week.split("week").pop(),
    student: false
  })
});

let currentIndexes = {
  indexh: 0,
  indexv: 0,
  indexf: 0
};

var allStudents = io.of("/students").on("connection", function(socket) {
  socket.emit("slide", currentIndexes);
});

var presenter = io.of("/presenter").on("connection", function(socket) {
  socket.on("auth", function(key) {
    if (key === process.env.SECRET) {
      socket.authenticated = true;
    }
  });

  socket.on("slide", function(state) {
    if (socket.authenticated) {
      currentIndexes = state;
      allStudents.emit("slide", state);  
    }
  });
});

server.listen(3000);

module.exports = app;
