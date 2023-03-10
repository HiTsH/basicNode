const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Welcome to our first express server!");
});

app.get("/contact", function (req, res) {
  res.send("Reach me via email: test@test.com");
});

app.get("/about", function (req, res) {
  res.send(
    "<h2>Hisham Hassan</h2><br><br><p>I am a web developer, I work with HTML, CSS + Bootstrap and Javascript(Js, Node.js, Express.js) and addin more techs to learn</p>"
  );
});

app.get("/hobbies", function (req, res) {
  res.send("<ul><li>Football</li><li>coffee</li><li>coding</li></ul>");
});

app.listen(3000, function () {
  console.log("Server Started on port 3000");
});
