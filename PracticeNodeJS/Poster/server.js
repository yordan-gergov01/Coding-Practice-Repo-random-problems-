const Framework = require("./framework");

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

server.route("get", "/styles.css", (req, res) => {
  res.sendFile("./public/styles.css", "text/css");
});

server.route("get", "/scripts.js", (req, res) => {
  res.sendFile("./public/scripts.js", "text/javascript");
});

// ----- JSON Routes ----- //
server.route("get", "/api/posts", (req, res) => {
  const posts = POSTS.map((post) => {
    const user = USERS.find((user) => user.id === post.userId);

    post.author = user.name;
    return post;
  });
  res.status(200).json(POSTS);
});

server.listen(PORT, () => {
  console.log(`Server has started listening on port ${PORT}...`);
});
