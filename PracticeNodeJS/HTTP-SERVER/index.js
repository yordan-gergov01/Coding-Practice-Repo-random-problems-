const http = require("http");

const PORT = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/register") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
            <h1>Fitness Server App</h1>
            <div>
            <h2>Register</h2>
            <input type='email' placeholder='Your email' />
            <input type='password' placeholder='Your password' />
            <button type='submit'>Register</button>
            </div>
            `);
  } else if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Your Progress Dashboard</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page Not Found!</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
