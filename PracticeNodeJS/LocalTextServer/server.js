const http = require("http");
const fs = require("fs/promises");

const PORT = 3050;

const server = http.createServer();

server.on("request", async (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");

    const fileHandle = await fs.open("data.txt", "r");
    const fileReadStream = fileHandle.createReadStream();

    fileReadStream.on("end", () => {
      console.log("File reading completed.");
    });

    fileReadStream.on("error", (error) => {
      console.error("Error reading file: ", error);
    });

    fileReadStream.pipe(res);
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
