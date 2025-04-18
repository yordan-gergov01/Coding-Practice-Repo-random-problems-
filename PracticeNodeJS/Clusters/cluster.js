const cluster = require("cluster");
const os = require("os");
const http = require("http");
const fs = require("fs/promises");

const PORT = 6040;

if (cluster.isPrimary) {
  const numCPUs = os.availableParallelism();
  console.log(`Primary ${process.pid} is running.`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  const server = http.createServer();

  server.on("request", async (req, res) => {
    if (req.url === "/" && req.method === "GET") {
      res.setHeader("Content-Type", "text/html");

      try {
        const fileHandle = await fs.open("./public/index.html", "r");
        const fileStream = fileHandle.createReadStream();
        fileStream.pipe(res);
      } catch (err) {
        res.writeHead(500);
        res.end("Internal Server Error");
      }
    } else {
      res.writeHead(404);
      res.end("Not Found");
    }
  });

  server.listen(PORT, () => {
    console.log(`Worker ${process.pid} listening on port ${PORT}...`);
  });
}
