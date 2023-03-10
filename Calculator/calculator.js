//jshint esversion:6

import express from "express";
import { urlencoded } from "body-parser";

const app = express();
app.use(urlencoded({ extended: true }));

// index.html Calculator
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/result", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("The calculation result is: " + result);
});

// bmicalculator.html
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / Math.pow(height, 2);

  res.send("<h1>BMI Calculation Result</h1> <p> Your BMI is " + bmi + "</p>");
});

// Server Listenr
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
