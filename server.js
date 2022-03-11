const express = require("express");
const app = express();
const fs = require("fs");

app.get("/html", (req, res) => {
  res.sendFile(__dirname + "./public/index.html");
});

app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});
