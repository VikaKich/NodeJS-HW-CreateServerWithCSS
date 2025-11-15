//Bar Shoshana
//Viktoria Kicherman

const http = require("http");
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "/templates");

// read html file
const file2Send = fs.readFileSync(`${dirPath}/page.html`);

// creating server
const server = http.createServer(function (req, res) {
  // write http header
  res.setHeader("Content-Type", "text/html");
  // write html file to the client
  res.end(file2Send);
});

server.listen(3000); //listen for any incoming requests
console.log("Node.js web server at port 3000 is running..");
