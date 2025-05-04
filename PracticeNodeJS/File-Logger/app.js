const fs = require("fs");
const readline = require("readline");

const getCurrentTime = require("./getCurrentTime");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileWriteStream = fs.createWriteStream("log.txt", { flags: "a" });

console.log("Enter a log message. Press Ctrl + D to finish.");

rl.on("line", (input) => {
  const time = getCurrentTime();
  fileWriteStream.write(`[${time}] ${input}\n`);
});

rl.on("close", () => {
  fileWriteStream.end();
  console.log("Log saved. Goodbye!");
});
