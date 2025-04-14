const net = require("net");
const readline = require("readline/promises");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const socket = net.createConnection(
  { host: "127.0.0.1", port: 4060 },
  async () => {
    console.log("Connected to the server!");
  }
);

rl.on("line", (input) => {
  socket.write(input);
});

socket.on("data", (data) => {
  console.log(`Message received: ${data.toString("utf-8")}`);
});

socket.on("end", () => {
  console.log("Connection was ended!");
});
