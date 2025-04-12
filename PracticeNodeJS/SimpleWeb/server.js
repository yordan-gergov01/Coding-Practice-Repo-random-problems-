const http = require("http");
const fs = require("fs/promises");

const PORT = 9000;

const server = http.createServer();

server.on("request", async (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");

    const fileHandle = await fs.open("./public/index.html", "r");
    const fileStream = fileHandle.createReadStream();

    // the pipe here automatically handles the drain event (it is the same thing like .on("data") event)
    fileStream.pipe(res);
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
