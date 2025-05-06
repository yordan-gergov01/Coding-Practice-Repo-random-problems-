const http = require("http");
const fs = require("fs/promises");

const PORT = 3060;

const server = http.createServer();

server.on("request", async (req, res) => {
  // Serving the html
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");

    const fileHtmlHandle = await fs.open("./public/index.html", "r");
    const fileHtmlStream = fileHtmlHandle.createReadStream();

    fileHtmlStream.pipe(res);
  }

  if (req.url === "/books" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");

    const fileJSONHandle = await fs.open("./data/books.json", "r");
    const fileJSONStream = fileJSONHandle.createReadStream();

    fileJSONStream.pipe(res);
  }

  if (req.url === "/script.js" && req.method === "GET") {
    res.setHeader("Content-Type", "application/javascript");

    const fileJSHandle = await fs.open("./public/script.js", "r");
    const fileJSStream = fileJSHandle.createReadStream();

    fileJSStream.pipe(res);
  }

  if (req.url === "/styles.css" && req.method === "GET") {
    res.setHeader("Content-Type", "text/css");

    const fileCSSHandle = await fs.open("./public/styles.css", "r");
    const fileCSSStream = fileCSSHandle.createReadStream();

    fileCSSStream.pipe(res);
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
