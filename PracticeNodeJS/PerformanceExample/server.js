const express = require("express");

const app = express();

const PORT = 3000;

function delay(duration) {
  const startTime = Date.now();

  while (Date.now() - startTime < duration) {
    // event loop is blocked here (the CPU is so busy)
  }
}

app.get("/", (req, res) => {
  res.send(`Performance example: ${process.pid}`);
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send(`Ready! ${process.pid}`);
});

console.log("Running server.js...");

console.log("Worker process started.");

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
