const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const feedsRoutes = require("./routes/feeds");

// app.use(bodyParser.urlencoded()); // this is good for x-www-form-urlencoded this is the format if data was submitted with <form> element tag
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feeds", feedsRoutes);

app.listen(8080);
