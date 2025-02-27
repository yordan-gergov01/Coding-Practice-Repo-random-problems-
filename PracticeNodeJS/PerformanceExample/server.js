const express = require("express");
const cluster = require("cluster");
const os = require("os");

const app = express();

const PORT = 3000;

function delay(duration) {
  const startTime = Date.now();

  while (Date.now() - startTime < duration) {
    // event loop is blocked here (the CPU is so busy)
  }
}

app.get("/", (req, res) => {
  // Operations that takes a lot of time
  // JSON.stringify({}) => "{}"
  // JSON.parse("{}") => {}
  // [5, 1, 2, 3, 4].sort()
  res.send(`Performance example: ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send(`Ready! ${process.pid}`);
});

if (cluster.isMaster) {
  console.log("Master has been started...");

  const NUM_WORKERS = os.cpus().length;

  for (let i = 0; i < NUM_WORKERS; i++) {
    cluster.fork();
  }
} else {
  console.log("Worker process started.");

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}
