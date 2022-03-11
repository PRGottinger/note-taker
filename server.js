const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 3001;
const db = require("./db/db.json");

app.use(express.static("public"));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/api/notes", (req, res) => {
  res.json(db);
});

app.get("/notes", (req, res) => {
  res.sendFile(__dirname + "/public/notes.html");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/api/notes", (req, res) => {
  db.push(req.body);
  fs.writeFile("./db/db.json", JSON.stringify(db), () => {
    console.log(req.body);
    res.json(req.body);
  });
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
