const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

app.set("view engine", "pug");
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/notes/create", (req, res) => {
  res.render("create");
});

const notesDB = [];

app.post("/notes/create", (req, res) => {
  const note = {
    title: req.body.title,
    body: req.body.details,
  };

  fs.readFile(
    path.join(__dirname, "/database/db.json"),
    "utf-8",
    (err, data) => {
      if (err) {
        console.error("Couldnt get the data from database");
      } else {
        notesDB = JSON.parse(data);
      }
    }
  );

  notesDB.push(note);

  fs.writeFile(
    path.join(__dirname, "/database/db.json"),
    JSON.stringify(notesDB),
    (err) => {
      if (err) {
        res.redirect("/notes/create?error=1");
      } else {
        res.redirect("/notes/create?succes=1");
      }
    }
  );
});

app.get("/notes", (req, res) => {
  res.render("notes", { notes: notesDB });
});

app.listen(8000, () => {
  console.log("localhost:8000");
});
