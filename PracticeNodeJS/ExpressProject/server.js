const {
  getMessages,
  postMessage,
} = require("./controllers/messagesController");
const {
  getFriends,
  postFriend,
  getOneFriend,
} = require("./controllers/friendsController");

const express = require("express");

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post("/friends", postFriend);
app.get("/friends", getFriends);
app.get("/friends/:friendId", getOneFriend);

app.get("/messages", getMessages);
app.post("/messages", postMessage);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
