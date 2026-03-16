let express = require("express");
let server = express();

server.get("/contact-us", function (req, res) {
  return res.send("Contact Us");
});
server.get("/", function (req, res) {
  return res.send("Home Page ");
});

server.listen(3000, function () {
  console.log("Server Started at localhost:3000");
});
