let http = require("http");
let server = http.createServer(function (req, res) {
  console.log("req.url? " + req.url);
  if (req.url == "/") return res.end("<h1>Hello From server</h1>");
  if (req.url == "/about-us") return res.end("<h1>About Us</h1>");
  return res.end("<h1>Page Not Found</h1>");
});
server.listen(3000, function () {
  console.log("Server Started. Access at localhost:3000");
});
