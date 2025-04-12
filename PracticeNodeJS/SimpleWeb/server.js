const http = require("http");
const fs = require("fs/promises");

const PORT = 9000;

const server = http.createServer();

server.on("request", async (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");

    const fileHtmlHandle = await fs.open("./public/index.html", "r");
    const fileHtmlStream = fileHtmlHandle.createReadStream();

    // the pipe here automatically handles the drain event (it is the same thing like .on("data") event)
    fileHtmlStream.pipe(res);
  }

  if (req.url === "/styles.css" && req.method === "GET") {
    res.setHeader("Content-Type", "text/css");

    const fileCssHandle = await fs.open("./public/styles.css", "r");
    const fileCssStream = fileCssHandle.createReadStream();

    fileCssStream.pipe(res);
  }

  if (req.url === "/script.js" && req.method === "GET") {
    res.setHeader("Content-Type", "application/javascript");

    const fileJSHandle = await fs.open("./public/script.js", "r");
    const fileJSStream = fileJSHandle.createReadStream();

    fileJSStream.pipe(res);
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
