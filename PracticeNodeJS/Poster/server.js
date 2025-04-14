const Framework = require("./framework");

// A sample object in this array would look like:
// {userId: 1, token: 2313412}
const SESSIONS = [];

const USERS = [
  { id: 1, name: "Liam Brown", username: "liam23", password: "string" },
  { id: 2, name: "Jason Smith", username: "jason_s", password: "string" },
  { id: 3, name: "Ben Adams", username: "ben.poet", password: "string" },
];

const POSTS = [
  {
    id: 1,
    title: "This is a post title",
    body: "This is the Liam's post body.",
    userId: 1,
  },
];

const PORT = 8000;

const server = new Framework();

// -----Files Routes ----- //
server.route("get", "/", (req, res) => {
  res.sendFile("./public/index.html", "text/html");
});

server.route("get", "/login", (req, res) => {
  res.sendFile("./public/index.html", "text/html");
});

server.route("get", "/styles.css", (req, res) => {
  res.sendFile("./public/styles.css", "text/css");
});

server.route("get", "/scripts.js", (req, res) => {
  res.sendFile("./public/scripts.js", "text/javascript");
});

// ----- JSON Routes ----- //
server.route("get", "/api/user", (req, res) => {
  const token = req.header.cookie.split("=")[1];
  const session = SESSIONS.find((session) => session.token === token);

  if (session) {
    // Send the user's profile
    console.log("Sending user info...");
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
});

server.route("get", "/api/posts", (req, res) => {
  const posts = POSTS.map((post) => {
    const user = USERS.find((user) => user.id === post.userId);

    post.author = user.name;
    return post;
  });
  res.status(200).json(POSTS);
});

server.route("post", "/api/login", (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString("utf-8");
  });

  req.on("end", () => {
    body = JSON.parse(body);

    const username = body.username;
    const password = body.password;

    const user = USERS.find((user) => user.username === username);

    if (user && user.password === password) {
      const token = Math.floor(Math.random() * 1000000000).toString();

      SESSIONS.push({ userId: user.id, token: token });

      res.setHeader("Set-Cookie", `token=${token}; Path=/;`);
      res.status(200).json({ message: "Logged in successfully!" });
    } else {
      res.status(401).json({ error: "Invalid username or password." });
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server has started listening on port ${PORT}...`);
});
