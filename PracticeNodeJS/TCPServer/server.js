const net = require("net");

const PORT = 4060;
const server = net.createServer();

const clients = [];

server.on("connection", (socket) => {
  console.log("A new connection to the server.");

  const clientId = clients.length + 1;

  clients.forEach((client) => {
    client.socket.write(`User ${clientId} joined!`);
  });

  socket.write(`id-${clientId}`);

  socket.on("data", (chunk) => {
    const message = chunk.toString("utf-8");
    console.log(message);

    clients.forEach((client) => {
      client.socket.write(`User ${clientId}: ${message}`);
    });
  });

  socket.on("error", () => {
    console.log("User left!");
  });

  socket.on("end", () => {
    const clientIndex = clients.findIndex((client) => client.socket === socket);

    clients.splice(clientIndex, 1);

    clients.forEach((client) => {
      client.socket.write(`User ${clientId} left!`);
    });
  });

  clients.push({ id: clientId.toString(), socket });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Server listening for connection request on port ${PORT}...`);
});
