const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "pug");
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8000, () => {
  console.log("localhost:8000");
});
