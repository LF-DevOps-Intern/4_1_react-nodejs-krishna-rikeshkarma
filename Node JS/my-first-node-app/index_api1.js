// Including the http module
const http = require("http");
const url = require("url");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/dev-data/api1Data.json`, "utf-8");
const productData = JSON.parse(data);

// Creating the server
const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);

  // Overview page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html"
    });
    res.end("This is the OVERVIEW page ! <br> <h1>Hello nodejs</h1>");

    // API
  } else if (pathname === "/api") {
    res.writeHead(404, {
      "Content-type": "text/html"
    });
    res.end(`<h1>${data}</h1>`);
  } else {
    // Not found
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world"
    });
    res.end("<h1>Page not found!</h1>");
  }
});

//Listening to the server
server.listen(6080);
console.log("Server is listening to requests on port 6080");
