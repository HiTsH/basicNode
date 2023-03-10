const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.cityName;
  const unit = "metric";
  const apiKey = "6538f65cfefbdd3fcde79f57f25c0d42";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    ",pl&units=" +
    unit +
    "&appid=" +
    apiKey;

  // get json data from api server, parse it in js object and obtain required pieces out of it
  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDiscr = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const iconUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      // only one res.send() is allowed in the app hence use app.write() to send as many info the end with app.send()
      res.write("<p>The weather is currently " + weatherDiscr + ".</p>");
      res.write(
        "<h1>The temperature in " + query + " is " + temp + " degrees.</h1>"
      );
      res.write("<img src=" + iconUrl + ">");
      res.send();
    });
  });
});

/*

  */

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
